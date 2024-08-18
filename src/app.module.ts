import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { StockPriceModule } from './stock-price/stock-price.module';

@Module({
  imports: [ProductsModule, StockPriceModule],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
