import { PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinColumn } from 'typeorm';
import EletronicImage from './EletronicsImages';

@Entity('eletronics')
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
  item: string;

  @Column()
  brand: string;

  @OneToMany(() => EletronicImage, image => image.eletronic, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'sneaker_id' })
  images: EletronicImage[];
}