import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from './Restaurant.model';
import { faStar } from "@fortawesomE/free-solid-svg-icons";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant!: Restaurant
  faStar = faStar


  constructor() { }

  ngOnInit(): void {
  }

}
