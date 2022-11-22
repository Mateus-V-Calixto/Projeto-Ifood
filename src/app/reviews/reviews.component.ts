import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconService } from '../icon/icon.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  faStar!:IconDefinition
  faUser!:IconDefinition
  constructor( private iconService:IconService) { }

  ngOnInit(): void {
    this.faStar = this.iconService.faStar
    this.faUser = this.iconService.faUser
  }

}
