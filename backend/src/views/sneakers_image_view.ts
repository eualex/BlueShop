import SneakerImage from '../models/SneakersImages';

export default {
  render(image: SneakerImage) {
    return {
      id: image.id,
      url: `http://${process.env.HOSTNAME}:${process.env.PORT}/uploads/${image.path}`
    };
  },

  renderMany(images: SneakerImage[]) {
    return images.map(image => this.render(image));
  }
}