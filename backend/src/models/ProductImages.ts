import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Product from './Products'; 

@Entity('product_images')
export default class ProductImages {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Product, product => product.images)
  @JoinColumn({ name: 'product_id' })
  product: Product
}