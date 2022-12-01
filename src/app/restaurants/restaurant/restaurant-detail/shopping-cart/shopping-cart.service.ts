import { Injectable } from '@angular/core';
import { MenuItem } from '../menu-item/menuItem.model';
import { CartItem } from './shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items:CartItem[] = []

  constructor() { }

  clear(){
    this.items = []
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)

    if(foundItem){
      this.adicionarQdt(foundItem)
    }else{
      this.items.push(new CartItem(item))
    }
  }


  adicionarQdt(item:CartItem){
    item.quatity = item.quatity + 1
  }

  subtrairQtd(item:CartItem){
    item.quatity =item.quatity -1

    if (item.quatity === 0) {
      this.removeItem(item)
    }
  }

  remove(item:CartItem){
    this.removeItem(item)
  }


  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

  total():number{
    return this.items.map(item => item.value()).reduce((prev,value)=> prev+value, 0)
  }

  frete(){
    return this.total() * 0.40
  }


}
