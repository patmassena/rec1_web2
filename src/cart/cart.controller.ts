import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cartService.findOne(id);
  }

  @Post()
  create(@Body() cartData: Partial<Cart>) {
    return this.cartService.create(cartData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cartData) {
    return this.cartService.update(id, cartData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cartService.remove(id);
  }
}
