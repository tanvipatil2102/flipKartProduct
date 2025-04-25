import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './shared/components/product-dashboard/product-dashboard.component';
import { BooksAndToysComponent } from './shared/components/books-and-toys/books-and-toys.component';
import { ProductComponent } from './shared/components/product/product.component';

const routes: Routes = [
  {
    path : '',
    component : ProductDashboardComponent
  },
  {
    path : 'products',
    component : ProductDashboardComponent
  },
  {
    path : 'products/:books',
    component : BooksAndToysComponent
  },
  {
    path : 'products/:books/:id',
    component : ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
