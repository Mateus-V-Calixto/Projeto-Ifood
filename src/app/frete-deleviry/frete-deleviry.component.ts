import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frete-deleviry',
  templateUrl: './frete-deleviry.component.html',
  styleUrls: ['./frete-deleviry.component.css']
})
export class FreteDeleviryComponent implements OnInit {


  @Input() frete!:number
  @Input() ItemsValue!:number

  constructor() { }

  ngOnInit(): void {
  }

  total():number{
    return this.frete + this.ItemsValue
  }

}
