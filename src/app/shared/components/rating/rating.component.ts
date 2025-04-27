import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
[x: string]: any;

  @Input() rating!: number;
  @Input() maxRating: number = 5;
  constructor() { }

  ngOnInit(): void {
  }

  getFillPercent(index: number): number {
    const diff = this.rating - index;
    if(diff >= 1){
      return 100;
    }
    if (diff > 0){
      return diff * 100;
    }
    return 0;
  }

  getStars(): number[] {
    return Array(this.maxRating);
  }

}
