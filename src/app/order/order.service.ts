import { Injectable } from '@angular/core';
import { CartItem } from '../restaurants/restaurant/restaurant-detail/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from '../restaurants/restaurant/restaurant-detail/shopping-cart/shopping-cart.service';
import { Order } from './order.modul';

import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url = environment.ifoodApi


@Injectable({
  providedIn: 'root'
})


export class OrderService {

  constructor(private cartService:ShoppingCartService, private http:HttpClient) { }


  cartItems():CartItem[]{
    return this.cartService.items
  }

  adicionarQtd(item:CartItem){
    this.cartService.adicionarQdt(item)
  }

  subtrairQtd(item:CartItem){
    this.cartService.subtrairQtd(item)
  }

  remove(item:CartItem){
    this.cartService.remove(item)
  }

  frete(){
    return this.cartService.frete()
  }

  itemsValue(){
    return this.cartService.total()
  }

  finalizarCompra(order:Order):Observable<Order>{
    const headers = new Headers
    headers.append('Content-Type', 'application/json')

    return this.http.post<Order>(`${url}orders`, order)
  }

  clear(){
    this.cartService.clear()
  }

 }
