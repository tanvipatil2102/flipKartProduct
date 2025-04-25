import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAndToysComponent } from './books-and-toys.component';

describe('BooksAndToysComponent', () => {
  let component: BooksAndToysComponent;
  let fixture: ComponentFixture<BooksAndToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksAndToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksAndToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
