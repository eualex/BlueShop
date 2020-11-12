import Sneakers from '../models/Sneakers';
import sneakers_image_view from './sneakers_image_view';

export default {
  render(sneaker: Sneakers) {
    return {
      id: sneaker.id,
      name: sneaker.name,
      price: sneaker.price,
      description: sneaker.description,
      brand: sneaker.brand,
      design: sneaker.design,
      genre: sneaker.genre,
      images: sneakers_image_view.renderMany(sneaker.images)
    };
  },

  renderMany(sneakers: Sneakers[]) {
    return sneakers.map(sneaker => this.render(sneaker));
  }
}