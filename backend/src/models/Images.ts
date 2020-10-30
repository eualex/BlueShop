import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Product from './Products'; 

@Entity('image')
export default class Images {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;


  @ManyToOne(() => Product, product => product.images)
  @JoinColumn({ name: 'product_id' })
  product: Product
}