import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
  ) {}

  async findAll(): Promise<Products[]> {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  async create(productData: Partial<Products>) {
    const product = this.productRepository.create(productData);
    return this.productRepository.save(product);
  }

  async update(id: number, productData) {
    await this.productRepository.update(id, productData);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.productRepository.delete(id);
  }
}
