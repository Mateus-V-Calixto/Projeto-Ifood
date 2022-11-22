import { Injectable } from '@angular/core';
import { faStar, faUser } from "@fortawesomE/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesomE/free-solid-svg-icons";

@Injectable({
  providedIn: 'root'
})
export class IconService {
  faStar = faStar
  faCircle = faCirclePlus
  faUser = faUser

  constructor() { }
}
