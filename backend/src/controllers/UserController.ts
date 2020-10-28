import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import user_view from '../views/user_view';

export default {
  async store(req: Request, res: Response) {
    const usersRepository = getRepository(User);

    const { name, email, password } = req.body;

    const userExists = await usersRepository.findOne({ where: { email } }); 

    if ( !!userExists ) {
      return res.sendStatus(409);
    }

    const data = { name, email, password };

    const user = usersRepository.create(data);
    await usersRepository.save(user);

    return res.status(201).json(user_view.render(user));
  }
}