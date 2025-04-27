import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  getProdArr !: any;
  prodId !: string;
  prodCount : number = 1;
  selectedImg !: Array<string>;
  constructor(
    private _router : ActivatedRoute,
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.prodId = this._router.snapshot.params['id'];
    console.log(this.prodId);
    this._productService.fetchSingleProd(this.prodId)
        .subscribe(res => {
          console.log(res);
          this.getProdArr = res;
          this.selectedImg = res.images[0];
        })
  }

  onDecrease(){
    if(this.prodCount > 1){
      this.prodCount--
    }
  }

  onIncrease(){
    this.prodCount++
  }
}
