import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avaliation',
  templateUrl: './avaliation.component.html',
  styleUrls: ['./avaliation.component.css']
})
export class AvaliationComponent implements OnInit {

  rated = false

  rates:number[] = [1,2,3,4, 5 ]

  rate:number = 0

  previousRate!:number

  constructor() { }

  ngOnInit(): void {
  }

  setRate(r:number){
    this.rate = r
    this.previousRate = 0
    this.rated = true


  }

  serTemporaryRate(r:number){
    if(this.previousRate === 0 ){
      this.previousRate = this.rate
    }
    this.rate = r

    console.log('e');

  }

  clearTemporaryRate(){
    if(this.previousRate != 0 ){
      this.rate = 0
      this.previousRate = 0

      this.rated = false
    }


    console.log('s');

  }

}
