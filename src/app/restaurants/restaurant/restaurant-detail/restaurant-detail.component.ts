import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconService } from 'src/app/icon/icon.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  faStar!:IconDefinition

  constructor(private iconService:IconService) { }

  ngOnInit(): void {
    this.faStar = this.iconService.faStar

  }

}
