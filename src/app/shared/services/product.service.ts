import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL : string = environment.baseUrl;
  PROD_URL : string = `${this.BASE_URL}/products`
  constructor(
    private _httpModule : HttpClient
  ) { }

  fetchAllProducts(): Observable<any> {
    return this._httpModule.get(this.PROD_URL);
  }

  fetchCatgProd(val : string) : Observable<any> {
    let params = new HttpParams().set('category', val)
    return this._httpModule.get(`${this.PROD_URL}/filter`,{
      params : params
    });
  }

  getCatgArrInfo(array : any){
    return array
  }

  fetchSingleProd(id : string): Observable<any>{
    return this._httpModule.get(`${this.PROD_URL}/${id}`)
  }
}
