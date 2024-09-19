import { ProductService } from './products.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<import("./products.entity").Products[]>;
    findOne(id: number): Promise<import("./products.entity").Products>;
    create(productData: any): Promise<import("./products.entity").Products>;
    update(id: number, productData: any): Promise<import("./products.entity").Products>;
    remove(id: number): Promise<void>;
}
