import api from './api';
import { RootProduct } from '../utils/product';

type Id = string;

export const handleGetSneakers = () => 
  api.get<RootProduct[]>('/sneakers')
  .then(res => res.data)

export const handlerGetOneSneaker = (id: Id) => 
  api.get<RootProduct>(`/sneaker/${id}`)
  .then(res => res.data)

export const handleRegisterSneaker = () => 
  api.post('/sneaker', {})
  .then(res => res.data);

export const handleUpdateSneaker = (id: Id, data: RootProduct) => 
  api.put(`/sneaker/${id}`)
  .then(res => res.data);