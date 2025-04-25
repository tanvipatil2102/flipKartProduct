import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProdCat } from '../../models/product';
import { productCategoryArr } from '../../const/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  getCatgProd !:any
  getProdArr : IProdCat[] = productCategoryArr;
  constructor(
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
    
  }

  
  

  onClick(prod : string){
    this._productService.fetchCatgProd(prod)
      .subscribe(res => {
        console.log(res);
        
        this.getCatgProd = res;
        
      })
  }

}
