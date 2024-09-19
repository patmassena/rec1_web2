import { Products } from 'src/products/products.entity';
export declare class Cart {
    id: number;
    cartId: number;
    productId: number;
    quantity: number;
    cart: Cart;
    product: Products;
}
