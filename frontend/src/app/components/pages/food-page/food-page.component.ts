import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from "../../partials/star-rating/star-rating.component";
import { CartService } from '../../../services/cart.service'; 
import { Router } from '@angular/router';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'] 
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService, private cartService: CartService,
    private router: Router
  ) { 
    activatedRoute.params.subscribe((params) => {

      if (params['id']) 
        foodService.getFoodById(params['id']).subscribe(serverFood => {
          this.food = serverFood;

      }
    )});
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigate(['/cart-page']).then(() => {
      location.reload();

    });
  }
  }

