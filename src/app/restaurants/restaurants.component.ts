import { Component, OnInit } from '@angular/core';
import { RestauranstsService } from './restauransts.service';
import { Restaurant } from './restaurant/Restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants!: Restaurant[]


  constructor(private restaurantService:RestauranstsService) { }

  ngOnInit(): void {
    console.log(this.restaurants);

     this.restaurantService.restaurests().subscribe(
     (res) => {this.restaurants = res}
    )

  }

}
