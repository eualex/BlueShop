import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as Yup from "yup";

import User from "../models/User";
import user_view from "../views/user_view";

export default {
  async authenticate(req: Request, res: Response) {
    const usersRepository = getRepository(User);
    const { NAME_ADM, EMAIL_ADM, PASSWORD_ADM, TOKEN } = process.env;

    const { email, password } = req.body;

    const data = { email, password };

    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = await usersRepository.findOne({ where: { email } });
    if (!user) {
      return res
        .status(403)
        .json({ message: "Email or password is incorrrect" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res
        .status(403)
        .json({ message: "Email or password is incorrrect" });
    }

    if (
      user.name === NAME_ADM &&
      user.email === EMAIL_ADM &&
      await bcrypt.compare(PASSWORD_ADM as string, user.password)
    ) {
      const token_adm = jwt.sign({ admin: true, id: user.id }, `${TOKEN}`, {
        expiresIn: "25m"
      })
      return res.json(user_view.render(user, token_adm));
    }

    const token = jwt.sign({ admin: false, id: user.id }, `${TOKEN}`, {
      expiresIn: "25m",
    });
    
    return res.json(user_view.render(user, token));

  },
};
