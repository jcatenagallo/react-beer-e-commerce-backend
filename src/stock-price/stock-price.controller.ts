import { Controller, Get, Param } from '@nestjs/common';
import { StockPriceService } from './stock-price.service';

@Controller('stock-price')
export class StockPriceController {
  constructor(private readonly stockPriceService: StockPriceService) {}

  @Get(':sku')
  getUserById(@Param() params: any) {
    return this.stockPriceService.getStockPrice(params.sku);
  }
}
