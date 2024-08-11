import { Injectable } from '@angular/core';
import { Food } from '../components/shared/models/food';
import { sample } from 'rxjs';
import { sample_foods } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] {
    return sample_foods;
    
  }
}