import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderSumaryComponent } from './order/order-sumary/order-sumary.component';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './restaurants/restaurant/restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'restaurants', component:RestaurantsComponent},
  {path:'order', component:OrderComponent},
  {path:'order-summary', component:OrderSumaryComponent},
  {path: 'restaurant/:id', component:RestaurantDetailComponent , children: [
    {path: '', redirectTo:'menu', pathMatch:'full'},
    {path: 'menu', component:MenuComponent},
    {path: 'reviews', component:ReviewsComponent}
  ]},
  {path: 'about', loadChildren: () =>import('./about/about.module').then(m => m.AboutModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
