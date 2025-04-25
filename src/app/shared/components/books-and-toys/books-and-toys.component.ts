import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-books-and-toys',
  templateUrl: './books-and-toys.component.html',
  styleUrls: ['./books-and-toys.component.scss']
})
export class BooksAndToysComponent implements OnInit {

  prodCatg !: string
  getProdCatgArr !: any
  constructor(
    private _router : ActivatedRoute,
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.prodCatg = this._router.snapshot.params['books'];
    console.log(this.prodCatg);

    this._productService.fetchCatgProd(this.prodCatg)
      .subscribe(res => {
        this.getProdCatgArr = res      
      })
  }
}