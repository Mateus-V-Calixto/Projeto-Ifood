import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';
import { IconService } from 'src/app/icon/icon.service';
import { RestauranstsService } from 'src/app/restaurants/restauransts.service';
import { MenuItem, MenuItems } from '../menu-item/menuItem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faCircle!:IconDefinition
  menu!:Observable<MenuItems>


  constructor(private iconService:IconService, private route:ActivatedRoute , private restaurantSevice:RestauranstsService) { }

  ngOnInit(): void {
    this.faCircle = this.iconService.faCircle
    this.menu =this.restaurantSevice.menuOfRestaurant(this.route.parent!.snapshot.params['id'])

  }

  addMenuItem(item:MenuItem){
    console.log(item);

  }
}
