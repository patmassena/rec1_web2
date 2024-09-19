import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

  async findAll(): Promise<Cart[]> {
    return this.cartRepository.find({ relations: ['cart', 'product'] });
  }

  async findOne(id: number) {
    return this.cartRepository.findOne({
      where: { id },
      relations: ['cart', 'product'],
    });
  }

  async create(cartData){
    const cart = this.cartRepository.create(cartData);
    return this.cartRepository.save(cart);
  }


  async update(id: number, cartData) {
    await this.cartRepository.update(id, cartData);
    return this.findOne(id);
  }


  async remove(id: number) {
    await this.cartRepository.delete(id);
  }
}
