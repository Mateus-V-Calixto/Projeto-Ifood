import { Component, Input, OnInit , ContentChild, AfterContentInit} from '@angular/core';
import { NgModel } from "@angular/forms";

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit , AfterContentInit{

  @Input() label!:string
  @Input() erroensage!:string

  @ContentChild(NgModel) model!: NgModel
  @Input()input:any

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterContentInit(){
    this.input = this.model

    if(this.input === undefined){
      throw new Error("precisa ser inicializada");

    }
  }
}
