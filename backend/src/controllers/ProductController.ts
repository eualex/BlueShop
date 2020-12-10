import { Request, Response } from "express";

import { getRepository, ReplaceOneOptions } from "typeorm";
import * as Yup from "yup";

import Products from "../models/Products";
import products_view from "../views/products_view";
import product_view from "../views/products_view";

export default {
  async index(req: Request, res: Response) {
    const productsRepository = getRepository(Products);

    const products = await productsRepository.find({
      relations: ["images"],
    });

    return res.json(products_view.renderMany(products));
  },
  async show(req: Request, res: Response) {
    const productsRepository = getRepository(Products);
    const { category } = req.params;

    if (!category) {
      return res.status(404);
    }

    const products = await productsRepository.find({
      relations: ["images"],
      where: { category },
    });

    return res.json(products_view.renderMany(products));
  },
  async store(req: Request, res: Response) {
    const productsRepository = getRepository(Products);
    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const {
      name,
      price,
      description,
      brand,
      category,
      genre,
      type,
      deleted,
    } = req.body;

    const data = {
      name,
      price,
      description,
      brand,
      category,
      genre,
      type,
      deleted,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      description: Yup.string().required(),
      brand: Yup.string(),
      category: Yup.string().required(),
      genre: Yup.string(),
      type: Yup.string().required(),
      deleted: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, { abortEarly: false });

    const product = productsRepository.create(data);
    await productsRepository.save(product);

    return res.status(201).json(product_view.render(product));
  },
  async update(req: Request, res: Response) {
    const productsRepository = getRepository(Products);
    const { id } = req.params;

    const {
      name,
      price,
      description,
      brand,
      category,
      genre,
      type,
      deleted,
    } = req.body;

    const data = {
      name,
      price,
      description,
      brand,
      category,
      genre,
      type,
      deleted,
    };

    const schema = Yup.object().shape({
      name: Yup.string(),
      price: Yup.number(),
      description: Yup.string(),
      brand: Yup.string(),
      category: Yup.string(),
      genre: Yup.string(),
      type: Yup.string(),
      deleted: Yup.boolean(),
    });

    await schema.validate(data, { abortEarly: false });

    const resUpdate = await productsRepository.update(id, data);

    return !!resUpdate.affected
      ? res.status(200).json({ message: "Product updated with success :)" })
      : res.status(500);
  },
  async delete(req: Request, res: Response) {
    const productsRepository = getRepository(Products);
    const { id } = req.params;

    const { deleted } = req.body;

    const schema = Yup.object().shape({
      deleted: Yup.boolean().required(),
    });

    await schema.validate({ deleted });

    const resUpdateDeleted = await productsRepository.update(id, { deleted });

    return !!resUpdateDeleted
      ? res.json({ message: "Product deleted with success :)" })
      : res.status(500);
  },
};
