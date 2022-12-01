import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR , ControlValueAccessor } from '@angular/forms';
import { RadioOption } from './radio-options.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi:true
    }
  ]
})
export class RadioComponent implements OnInit , ControlValueAccessor{

  @Input() options!:RadioOption[]
  onChange:any
  value:any

  constructor() { }

  ngOnInit(): void {
  }

  setValue(value:any){
    this.value = value
    this.onChange(this.value)
  }
  writeValue(obj: any): void {
    //metodo vai ser chamado quando as diretivas quiserem passa um valor para o component
    this.value = obj
  }

  registerOnChange(fn: any): void {
    //passa uma funcao quando o valor do component mudar
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {
  }


}
