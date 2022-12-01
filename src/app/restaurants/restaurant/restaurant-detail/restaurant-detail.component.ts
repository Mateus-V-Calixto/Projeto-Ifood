import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconService } from 'src/app/icon/icon.service';
import { RestauranstsService } from '../../restauransts.service';
import { Restaurant } from '../Restaurant.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant!:Restaurant
  restaurantId!:string
  faStar!:IconDefinition

  constructor(private iconService:IconService, private restaurantsService:RestauranstsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.faStar = this.iconService.faStar

    this.restaurantsService.restaurantById(this.route.snapshot.params['id']).subscribe((restaurant) => {
      this.restaurant = restaurant
    })



  }

}
