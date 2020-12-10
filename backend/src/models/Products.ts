import { PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinColumn } from 'typeorm';
import ProductImage from './ProductImages';

@Entity('products')
export default class Eletronics {

  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  description: string;
  
  @Column()
  brand: string;

  @Column()
  category: string;

  @Column()
  genre: string;

  @Column()
  type: string;
  
  @Column()
  deleted: boolean;
  
  @OneToMany(() => ProductImage, image => image.product, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'product_id' })
  images: ProductImage[];
}