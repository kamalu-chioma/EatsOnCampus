import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Food } from '../../shared/models/food';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {
    this.foods = this.foodService.getAll();
  }

  ngOnInit(): void {
  }
}
