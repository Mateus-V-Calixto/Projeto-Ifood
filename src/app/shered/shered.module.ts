import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { AvaliationComponent } from './avaliation/avaliation.component';



@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    AvaliationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    AvaliationComponent
  ]
})
export class SheredModule { }
