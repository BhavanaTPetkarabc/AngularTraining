import { Injectable } from '@angular/core';
import data from '../assets/product.json';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productData: any;
  productDataFromWeb: any;
  constructor(private objHttpClient: HttpClient) {
    this.productData = data;
  }
  getProductData() {
    return this.productData;
  }
  getProductDataFromRESTAPI() {
    return (this.productDataFromWeb = this.objHttpClient.get(
      'https://dummyjson.com/products'
    ));
  }
}
