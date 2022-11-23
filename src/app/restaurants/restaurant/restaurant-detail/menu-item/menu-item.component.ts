import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestauranstsService } from 'src/app/restaurants/restauransts.service';
import { MenuItem, MenuItems } from './menuItem.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() item!:MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  emitAddEvent(){
    this.add.emit(this.item)
  }

}
