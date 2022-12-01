import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/icon/icon.service';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService , private iconService:IconService) { }

  faRemove = this.iconService.faRemove

  ngOnInit(): void {
  }

  items():any[]{
    return this.shoppingCartService.items
  }

  total(){
    return this.shoppingCartService.total()
  }

  clear(){
    this.shoppingCartService.clear()
  }

  removeItem(item:any){
    this.shoppingCartService.removeItem(item)

  }

  addItem(item:any){
    this.shoppingCartService.addItem(item)
  }

}
