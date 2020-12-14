import api from './api';

import { ProductProps } from '../utils/product';

export const handleGetSpecificProduct = (category: string) => 
  api.get<ProductProps[]>(`/products/${category}`)
  .then(res => res.data.filter(p => p.deleted !== true));


export const handleGetProducts = () => 
  api.get<ProductProps[]>('/products')
  .then(res => res.data.filter(p => p.deleted !== true));

export const handleCreateProduct = (data: ProductProps) => 
  api.post('/product', data)
  .then(res => res.data)

export const handleUpdateProduct = (id: string, data: ProductProps) => 
  api.put(`/product/${id}`, data)
  .then(res => res.data)

export const handleDeleteProduct = (id: string) => 
  api.delete(`/product/${id}`)
  .then(res => res.data)
