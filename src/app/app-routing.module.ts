import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';



const routes: Routes = [
{path: 'restaurant', component: RestaurantListComponent, canActivate:[AuthGaurdService] },
{path: 'create-restaurant', component: CreateRestaurantComponent,canActivate:[AuthGaurdService] },
{path: '', redirectTo: 'login-page', pathMatch: 'full'},
{path: 'update-restaurant/:id', component: UpdateRestaurantComponent,canActivate:[AuthGaurdService] },
{path: 'restaurant-details/:id', component: RestaurantDetailsComponent ,canActivate:[AuthGaurdService]},
{path: 'login-page', component: LoginPageComponent},
{path: 'register-page', component:  RegisterPageComponent},
{path:'feedback-page', component: FeedbackPageComponent},
{path:'logout-page', component:LogoutPageComponent,canActivate:[AuthGaurdService]},
{path:'profile-card', component: ProfileCardComponent},
{path:'home-page', component:  HomePageComponent},
{path:'contact-page', component:  ContactPageComponent},
{path:'about-page', component:    AboutPageComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
