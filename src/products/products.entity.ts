import { Cart } from './../cart/cart.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column('float')
  price: number;

  @OneToMany(() => Cart, (cart) => cart)
  cart: Cart[];
}
