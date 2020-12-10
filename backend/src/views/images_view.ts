import ProductImage from "../models/ProductImages";

export default {
  render(image: ProductImage) {
    return {
      id: image.id,
      url: `http://${process.env.HOSTNAME}:${process.env.PORT}/uploads/${image.path}`,
    };
  },
  renderMany(images: ProductImage[]) {
    return images.map((image) => this.render(image));
  },
};
