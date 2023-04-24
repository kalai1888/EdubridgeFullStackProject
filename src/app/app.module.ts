import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantListComponent,
    UpdateRestaurantComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FeedbackPageComponent,
    LogoutPageComponent,
    ProfileCardComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
