import { Repository } from 'typeorm';
import { Products } from './products.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Products>);
    findAll(): Promise<Products[]>;
    findOne(id: number): Promise<Products>;
    create(productData: Partial<Products>): Promise<Products>;
    update(id: number, productData: any): Promise<Products>;
    remove(id: number): Promise<void>;
}
