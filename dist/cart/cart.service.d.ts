import { Repository } from 'typeorm';
import { Cart } from './cart.entity';
export declare class CartService {
    private readonly cartRepository;
    constructor(cartRepository: Repository<Cart>);
    findAll(): Promise<Cart[]>;
    findOne(id: number): Promise<Cart>;
    create(cartData: any): Promise<Cart[]>;
    update(id: number, cartData: any): Promise<Cart>;
    remove(id: number): Promise<void>;
}
