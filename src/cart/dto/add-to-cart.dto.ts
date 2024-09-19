import { IsInt, IsPositive, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddToCartDto {
  @ApiProperty({ description: 'ID do produto a ser adicionado', example: 1 })
  @IsInt({ message: 'O ID do produto deve ser um número inteiro.' })
  @IsPositive({ message: 'O ID do produto deve ser positivo.' })
  productId: number;

  @ApiProperty({ description: 'Quantidade do produto a ser adicionada', example: 2 })
  @IsInt({ message: 'A quantidade deve ser um número inteiro.' })
  @Min(1, { message: 'A quantidade mínima é 1.' })
  quantity: number;
}
