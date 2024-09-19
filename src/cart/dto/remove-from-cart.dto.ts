import { IsInt, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveFromCartDto {
  @ApiProperty({ description: 'ID do produto a ser removido', example: 1 })
  @IsInt({ message: 'O ID do produto deve ser um número inteiro.' })
  @IsPositive({ message: 'O ID do produto deve ser positivo.' })
  productId: number;
}
