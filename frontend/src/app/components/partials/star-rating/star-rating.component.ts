import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() value = 0;
  @Input() totalstars = 5;
  @Input() size = '24px';
  @Input() readonly = true;

  stars: number[] = [];

  ngOnInit(): void {
    this.stars = Array(this.totalstars).fill(0);
  }

  onRate(value: number): void {
    if (!this.readonly) {
      this.value = value;
    }
  }
}
