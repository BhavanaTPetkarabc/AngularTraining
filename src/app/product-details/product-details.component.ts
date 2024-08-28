import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productData: any;
  selectedID: any;
  selectedData: any;
  constructor(
    private objActivatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    //depdency injection

    //read the selectedproduct from the url ....read the route parameter
    //dependency injection
    //injecting the service of other class into your class and make that object of that class
    //to behave like an member of your class
    //ActivatedRoute - routing header file
    //  this.productData = this.productService.getProductData();
    // objActivatedRoute.params.subscribe((param: any) => {
    //   this.selectedID = param.pid;
    //   //
    //   for (let pdata of this.productData) {
    //     if (pdata.id == this.selectedID) {
    //       this.selectedData = pdata;
    //     }
    //   }
    // });
    this.productService
      .getProductDataFromRESTAPI()
      .subscribe((pdtdata: any) => {
        this.productData = pdtdata?.products;
        this.getSelectedData();
      });
  }
  getSelectedData() {
    this.objActivatedRoute.params.subscribe((param: any) => {
      this.selectedID = param.pid;
    });

    for (let pdata of this.productData) {
      if (pdata.id == this.selectedID) {
        this.selectedData = pdata;
      }
    }
  }
}
