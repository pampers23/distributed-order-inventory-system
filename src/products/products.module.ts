import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductsService } from './products.service';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ProductsController],
  imports: [PrismaModule, AuthModule],
  providers: [ProductsService, JwtStrategy]
})
export class ProductsModule {}
