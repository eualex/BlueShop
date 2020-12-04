import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import jwt from "jsonwebtoken";

import User from '../models/User';
import user_view from '../views/user_view';

export default {
  async store(req: Request, res: Response) {
    const usersRepository = getRepository(User);

    const { name, email, password } = req.body;

    const data = { name, email, password };
    
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required()
    });

    await schema.validate(data, {
      abortEarly: false
    });

    const userExists = await usersRepository.findOne({ where: { email } }); 

    if ( !!userExists ) {
      return res.status(409).json({ message: 'Email already registered!' });
    }

    const user = usersRepository.create(data);
    await usersRepository.save(user);

    const id = await usersRepository.findOne({ where: { email } });

    const token = jwt.sign({ id: user.id }, `${process.env.JWT_TOKEN}`, {
      expiresIn: "25m",
    });

    return res.status(201).json(user_view.render(user, token));
  },

  async index(req: Request, res: Response) {
    const userRepository = getRepository(User);
    const id = req.userId;

    const user = await userRepository.findOneOrFail({ where: { id } })

    return res.json(user_view.render(user));
  }
}