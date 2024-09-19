import { CartService } from './cart.service';
import { Cart } from './cart.entity';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    findAll(): Promise<Cart[]>;
    findOne(id: number): Promise<Cart>;
    create(cartData: Partial<Cart>): Promise<Cart[]>;
    update(id: number, cartData: any): Promise<Cart>;
    remove(id: number): Promise<void>;
}
