import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../restaurants/restaurant/restaurant-detail/shopping-cart/shopping-cart.model';
import { RadioOption } from '../shered/radio/radio-options.model';
import { OrdemItem, Order } from './order.modul';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form!:FormGroup

  paymentOptions:RadioOption[] = [
    {label:'dinheiro', value:'MON'},
    {label:'Credito', value:'CRE'},
    {label:'Debito', value:'DEB'}
  ]

  constructor(private formBilder:FormBuilder,private  orderService:OrderService ,private route:Router) { }

  ngOnInit(): void {
    this.form = this.formBilder.group({
      endereco:['',[Validators.required, Validators.minLength(3)]],
      numero:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      complemento:[''],
      paymentOption:['',Validators.required]
    })
  }

  get iptEndereco(){
    return this.form.get('endereco')!
  }

  get iptNumero(){
    return this.form.get('numero')!
  }

  cartItem():CartItem[]{
    return this.orderService.cartItems()
  }

  adicionarQtd(item:CartItem){
    this.orderService.adicionarQtd(item)
  }

  subtrairQtd(item:CartItem){
    this.orderService.subtrairQtd(item)
  }

  remove(item:CartItem){
    this.orderService.remove(item)
  }

  itemsValue(){
    return this.orderService.itemsValue()
  }

  frete(){
    return this.orderService.frete()
  }


  finalizarCompra(order:Order){
    order.orderItems = this.cartItem().map((item:CartItem) => {return new OrdemItem(item.quatity, item.menuItem.id)})

    this.orderService.finalizarCompra(order).subscribe( (orderId) =>{
      console.log(orderId);
      this.orderService.clear()
      this.form.reset()
      this.route.navigate(['/order-summary'])
    })



  }


}
