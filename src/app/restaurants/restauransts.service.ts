import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Reviews } from '../reviews/reviews.model';
import { Restaurant } from './restaurant/Restaurant.model';


@Injectable({
  providedIn: 'root'
})
export class RestauranstsService {
  url = environment.ifoodApi


  constructor(private http:HttpClient) { }

  restaurests(){
    return this.http.get<Restaurant[]>(`${this.url}restaurants`)
  }


  restaurantById(id:string){
    return this.http.get<Restaurant>(`${this.url}restaurants/${id}`)
  }

  reviesOfRestaurant(id:string){
    return this.http.get<Reviews>(`${this.url}restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id:string){
    
  }

}
