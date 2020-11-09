import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as Yup from 'yup';

import User from "../models/User";
import user_view from '../views/user_view';

export default {
  async authenticate(req: Request, res: Response) {
    const usersRepository = getRepository(User);

    const { email, password } = req.body;

    const data = { email, password };

    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required()
    });

    await schema.validate(data, {
      abortEarly: false
    });

    const user = await usersRepository.findOne({ where: { email } });
    if (!user) {
      return res.status(403).json({ message: "Email or password is incorrrect" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(403).json({ message: "Email or password is incorrrect" });
    }

    const token = jwt.sign({ id: user.id }, `${process.env.JWT_TOKEN}`, {
      expiresIn: "1d",
    });

    return res.json(user_view.render(user, token));
  },
};
