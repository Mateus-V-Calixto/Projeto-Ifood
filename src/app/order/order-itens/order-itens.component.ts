import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/restaurants/restaurant/restaurant-detail/shopping-cart/shopping-cart.model';

@Component({
  selector: 'app-order-itens',
  templateUrl: './order-itens.component.html',
  styleUrls: ['./order-itens.component.css']
})
export class OrderItensComponent implements OnInit {

  @Input() items!:CartItem[]

  @Output() adicionarQtd = new EventEmitter<CartItem>()
  @Output() subtrairQtd = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()



  constructor() { }

  ngOnInit(): void {
  }

  emitAdicionarQtd(item:CartItem){
    this.adicionarQtd.emit(item)
    console.log('add');

  }

  emitSubtraitQtd(item:CartItem){
    this.subtrairQtd.emit(item)
    console.log('sub');

  }

  emitRemove(item:CartItem){
    this.remove.emit(item)
    console.log('rem');

  }

}
