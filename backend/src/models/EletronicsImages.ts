import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Eletronic from './Eletronics'; 

@Entity('eletronic-image')
export default class EletronicsImages {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Eletronic, eletronic => eletronic.images)
  @JoinColumn({ name: 'eletronic_id' })
  eletronic: Eletronic
}