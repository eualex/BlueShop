import { PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinColumn } from 'typeorm';
import SneakerImage from './SneakersImages';

@Entity('sneakers')
export default class Sneakers {

  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  description: string;

  @Column()
  genre: string;

  @Column()
  brand: string;

  @Column()
  design: string;

  @OneToMany(() => SneakerImage, image => image.sneaker, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'sneaker_id' })
  images: SneakerImage[];
}