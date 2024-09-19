import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() productData) {
    return this.productService.create(productData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() productData) {
    return this.productService.update(id, productData);
  }

  @Delete(':id')
  remove(@Param('id') id: number){
    return this.productService.remove(id);
  }
}

