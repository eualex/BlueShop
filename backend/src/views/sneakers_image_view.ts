import SneakerImage from '../models/SneakersImages';

export default {
  render(image: SneakerImage) {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`
    };
  },

  renderMany(images: SneakerImage[]) {
    return images.map(image => this.render(image));
  }
}