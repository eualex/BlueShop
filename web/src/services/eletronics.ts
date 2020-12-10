import api from './api';
import { RootProduct } from '../utils/product';

export const handleGetEletronics = () => 
  api.get<RootProduct[]>('/eletronics')
  .then(res => res.data)

export const handleRegisterEletronic = () => 
  api.post('/eletronic', {})
  .then(res => res.data);

export const handleUpdateEletronic = (id: string) => 
  api.put(`/eletronic/:${id}`)
  .then(res => res.data);