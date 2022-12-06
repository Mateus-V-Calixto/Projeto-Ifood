import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numberPattern = /^[0-9]*$/;

  form!:FormGroup

  paymentOptions:RadioOption[] = [
    {label:'dinheiro', value:'MON'},
    {label:'Credito', value:'CRE'},
    {label:'Debito', value:'DEB'}
  ]

  constructor(private formBilder:FormBuilder,private  orderService:OrderService ,private route:Router) { }

  ngOnInit(): void {
    this.form = this.formBilder.group({
      nome:['',[Validators.required, Validators.minLength(5)]],
      email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
      emailConfirmacao:['', [Validators.required, Validators.pattern(this.emailPattern)]],
      endereco:['',[Validators.required, Validators.minLength(3)]],
      numero:['', [Validators.required, Validators.pattern(this.numberPattern)]],
      complemento:[''],
      paymentOption:['',Validators.required]
    },{validator:OrderComponent.emailIguais})
  }

  static emailIguais(group:AbstractControl){
    const email:string = group.get<string>('email')?.value
    const emailConfirmacao:string = group.get<string>('emailConfirmacao')?.value

    if(!email || !emailConfirmacao){
      return undefined
    }

    if (email != emailConfirmacao) {
      return {emailDiferente:true}
    }

    return undefined;

  }

  get iptNome (){
    return this.form.get('nome')!
  }
  get iptEmail (){
    return this.form.get('email')!
  }
  get iptEmailConfirmacao (){
    return this.form.get('emailConfirmacao')!
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
