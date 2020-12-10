import Product from '../models/Products';
import images_view from './images_view';

export default {
  render(product: Product) {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      type: product.type,
      brand: product.brand,
      genre: product.genre,
      deleted: product.deleted,
      images: images_view.renderMany(product.images)
    }
  },
  renderMany(products: Product[]) {
    return products.map(p => this.render(p))
  }
}