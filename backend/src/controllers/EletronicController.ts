import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Eletronics from '../models/Eletronics';
import eletronics_view from '../views/eletronics_view';

export default {
  async index(req: Request, res: Response) {
    const eletronicsRepository = getRepository(Eletronics);

    const products = await eletronicsRepository.find({
      relations: ['images']
    });

    return res.json(eletronics_view.renderMany(products));
  },

  async store(req: Request, res: Response) {
    const eletronicsRepository = getRepository(Eletronics);
    const requestImages = req.files as Express.Multer.File[];
    
    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const { name, price, description, item, category, brand } = req.body;

    const data = { name, price, description, category, brand, images };

    const schema = Yup.object().shape({
      name: Yup.string().required(), 
      price: Yup.number().required(), 
      description: Yup.string().required(), 
      category: Yup.string().required(), 
      brand: Yup.string(), 
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    });

    await schema.validate(data, { abortEarly: false });

    const product = eletronicsRepository.create(data);
    await eletronicsRepository.save(product);

    return res.status(201).json(eletronics_view.render(product));
  }
}