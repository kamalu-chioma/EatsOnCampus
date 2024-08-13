import { Food } from './food';


export class CartItem{
    food!: Food;
    quantity: number = 1;
    price:number;

    constructor(public foodParam:Food){
        this.food = foodParam;
        this.price = this.food.price;
    }
}