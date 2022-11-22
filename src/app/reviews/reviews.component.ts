import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';
import { IconService } from '../icon/icon.service';
import { RestauranstsService } from '../restaurants/restauransts.service';
import { Reviews } from './reviews.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews!:Observable<Reviews>

  faStar!:IconDefinition
  faUser!:IconDefinition

  constructor( private iconService:IconService ,private restaurantService:RestauranstsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.faStar = this.iconService.faStar
    this.faUser = this.iconService.faUser

    this.reviews = this.restaurantService.reviesOfRestaurant(this.route.parent!.snapshot.params['id'])

  }

}
