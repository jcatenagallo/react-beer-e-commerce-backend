import { Module } from '@nestjs/common';
import { StockPriceController } from './stock-price.controller';
import { StockPriceService } from './stock-price.service';

@Module({
  controllers: [StockPriceController],
  providers: [StockPriceService]
})
export class StockPriceModule {}
