import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productData: any;
  constructor(objProductService: ProductService) {
    // this.productData = objProductService.getProductData();;
    objProductService.getProductDataFromRESTAPI().subscribe((pdtdata: any) => {
      this.productData = pdtdata;
    });
  }
}
