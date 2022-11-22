import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconService } from 'src/app/icon/icon.service';
import { Restaurant } from './Restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant!: Restaurant
  public faStar?:IconDefinition


  constructor(private iconService:IconService) { }

  ngOnInit(): void {
    this.faStar = this.iconService.faStar
  }

}
