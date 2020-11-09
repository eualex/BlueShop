import { PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinColumn } from 'typeorm';
import Image from './Images';

@Entity('products')
export default class Products {

  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  description: string;
  
  @Column()
  category: string;

  @Column()
  genre: string;

  @Column()
  brand: string;

  @Column()
  design: string;

  @OneToMany(() => Image, image => image.product, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'product_id' })
  images: Image[];
}