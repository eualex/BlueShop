import Product from '../models/Products';
import image_view from './image_view';

export default {
  render(product: Product) {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      brand: product.brand,
      category: product.category,
      design: product.design,
      genre: product.genre,
      images: image_view.renderMany(product.images)
    };
  },

  renderMany(products: Product[]) {
    return products.map(product => this.render(product));
  }
}