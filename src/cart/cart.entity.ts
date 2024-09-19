import { Products } from 'src/products/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cartId: number;

  @Column()
  productId: number;

  @Column('int')
  quantity: number;

  @ManyToOne(() => Cart, (cart) => cart)
  cart: Cart;

  @ManyToOne(() => Products, (product) => product)
  product: Products;
}
