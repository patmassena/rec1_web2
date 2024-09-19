import { Module } from '@nestjs/common';
import { ProductController } from './products/products.controller';
import { CartController } from './cart/cart.controller';
import { PrismaService } from './prisma.service';


@Module({
  controllers: [ProductController, CartController],
  providers: [PrismaService],
})
export class AppModule {}
