import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDashboardComponent } from './shared/components/product-dashboard/product-dashboard.component';
import { ProductComponent } from './shared/components/product/product.component';
import { RatingComponent } from './shared/components/rating/rating.component';
import { BooksAndToysComponent } from './shared/components/books-and-toys/books-and-toys.component';
import { MaterialModule } from './material/material/material.module';
import { HomeComponent } from './shared/components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductComponent,
    RatingComponent,
    BooksAndToysComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
