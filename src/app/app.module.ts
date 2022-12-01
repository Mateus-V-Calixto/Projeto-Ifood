import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from "@angular/common/http";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/restaurant/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants/restaurant/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants/restaurant/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { InputComponent } from './shered/input/input.component';
import { RadioComponent } from './shered/radio/radio.component';
import { OrderItensComponent } from './order/order-itens/order-itens.component';
import { FreteDeleviryComponent } from './frete-deleviry/frete-deleviry.component';
import { OrderSumaryComponent } from './order/order-sumary/order-sumary.component';
import { AvaliationComponent } from './shered/avaliation/avaliation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItensComponent,
    FreteDeleviryComponent,
    OrderSumaryComponent,
    AvaliationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
