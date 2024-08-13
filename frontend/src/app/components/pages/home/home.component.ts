import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Food } from '../../shared/models/food';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { FoodService } from '../../../services/food.service';
import { SearchComponent } from '../../partials/search/search.component';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, StarRatingComponent, SearchComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        console.log(params['searchTerm']);
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      } else {
        foodsObservable = this.foodService.getAll();
        
      }
      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }

  ngOnInit(): void {
  }
}
