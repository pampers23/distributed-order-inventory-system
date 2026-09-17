import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(dto: CreateProductDto) {
    const existingProduct = await this.prisma.product.findUnique({
      where: {
        sku: dto.sku,
      }
    });

    if (existingProduct) {
      throw new ConflictException('This product already exist.');
    }

    return this.prisma.product.create({
      data: {
        name: dto.name,
        description: dto.description,
        sku: dto.sku,
        price: dto.price
      },
    });
  }
}
