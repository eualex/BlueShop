import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import Sneakers from "../models/Sneakers";
import sneakers_view from "../views/sneakers_view";

export default {
  async index(req: Request, res: Response) {
    const sneakersRepository = getRepository(Sneakers);

    const products = await sneakersRepository.find({
      relations: ["images"],
    });

    return res.json(sneakers_view.renderMany(products));
  },

  async store(req: Request, res: Response) {
    const sneakersRepository = getRepository(Sneakers);
    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const {
      name,
      price,
      description,
      genre,
      brand,
      design,
    } = req.body;

    const data = {
      name,
      price,
      description,
      genre,
      brand,
      design,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      description: Yup.string().required(),
      genre: Yup.string().required(),
      brand: Yup.string(),
      design: Yup.string(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, { abortEarly: false });

    const product = sneakersRepository.create(data);
    await sneakersRepository.save(product);

    return res.status(201).json(sneakers_view.render(product));
  },
};
