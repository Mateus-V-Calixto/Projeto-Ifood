import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { FreteDeleviryComponent } from './frete-deleviry/frete-deleviry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SheredModule } from '../shered/shered.module';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';

const routes:Routes = [
  {
    path: '',
    component: OrderComponent
  },
  {path:'summary', component:OrderSumaryComponent},
]

@NgModule({
  declarations: [
    OrderComponent,
    OrderItensComponent,
    OrderSumaryComponent,
    FreteDeleviryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SheredModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
