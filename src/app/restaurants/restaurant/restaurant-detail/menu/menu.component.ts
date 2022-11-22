import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconService } from 'src/app/icon/icon.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faCircle!:IconDefinition



  constructor(private iconService:IconService) { }

  ngOnInit(): void {
    this.faCircle = this.iconService.faCircle
  }

}
