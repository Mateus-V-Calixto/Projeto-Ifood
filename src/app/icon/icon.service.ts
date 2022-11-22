import { Injectable } from '@angular/core';
import { faStar } from "@fortawesomE/free-solid-svg-icons";

@Injectable({
  providedIn: 'root'
})
export class IconService {
  faStar = faStar

  constructor() { }
}
