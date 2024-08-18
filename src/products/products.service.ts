import { Injectable } from '@nestjs/common';
const products = require('../../data/products');

@Injectable()
export class ProductsService {
  private readonly products = products;

  getAllProducts() {
    return this.products;
  }
}
