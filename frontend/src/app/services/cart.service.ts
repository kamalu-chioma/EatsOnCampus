import { Injectable } from '@angular/core';
import { Cart } from '../components/shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../components/shared/models/food';
import { CartItem } from '../components/shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }


  addToCart(food:Food):void{
    let cartItem =this.cart.items.find(item => item.food.id === food.id);

    if(cartItem) 
      return;
    this.cart.items.push(new CartItem(food));

    this.setCartToLocalStorage();
    //this.cartSubject.next(this.cart);

    }

  removeFromCart(foodId:string):void{
    this.cart.items = this.cart.items
    .filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();

  }

  changeQuantity(foodId:string, quantity:number):void{
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem)
      return;

    cartItem.quantity = quantity;
    cartItem.price = cartItem.food.price * quantity;
    this.setCartToLocalStorage();

  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();

  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);

    this.cartSubject.next(this.cart);

  }

  private getCartFromLocalStorage(){
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
