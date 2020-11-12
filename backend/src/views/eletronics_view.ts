import Eletronics from '../models/Eletronics';
import eletronics_image_view from './eletronics_image_view';

export default {
  render(eletronics: Eletronics) {
    return {
      id: eletronics.id,
      name: eletronics.name,
      price: eletronics.price,
      description: eletronics.description,
      brand: eletronics.brand,
      item: eletronics.item,
      images: eletronics_image_view.renderMany(eletronics.images)
    };
  },

  renderMany(eletronics: Eletronics[]) {
    return eletronics.map(eletronic => this.render(eletronic));
  }
}