import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Sneaker from './Sneakers'; 

@Entity('sneaker-image')
export default class SneakersImages {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Sneaker, sneaker => sneaker.images)
  @JoinColumn({ name: 'sneaker_id' })
  sneaker: Sneaker;
}