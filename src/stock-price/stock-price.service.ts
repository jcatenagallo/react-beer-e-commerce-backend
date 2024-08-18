import { Injectable } from '@nestjs/common';
const stockPrice = require('../../data/stock-price');

@Injectable()
export class StockPriceService {
  private readonly stockPrice = stockPrice;

  getStockPrice(sku: string) {
    return this.stockPrice[sku];
  }
}
