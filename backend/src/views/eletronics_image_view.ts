import EletronicImage from '../models/EletronicsImages';

export default {
  render(image: EletronicImage) {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`
    };
  },

  renderMany(images: EletronicImage[]) {
    return images.map(image => this.render(image));
  }
}