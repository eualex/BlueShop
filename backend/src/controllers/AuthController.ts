import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import User from "../models/User";
import user_view from '../views/user_view';

export default {
  async authenticate(req: Request, res: Response) {
    const usersRepository = getRepository(User);

    const { name, email, password } = req.body;

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user.id }, `${process.env.JWT_TOKEN}`, {
      expiresIn: "1d",
    });

    return res.json(user_view.render(user, token));
  },
};
