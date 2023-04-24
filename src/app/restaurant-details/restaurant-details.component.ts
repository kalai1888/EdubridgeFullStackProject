import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

 id: number = 0;

  restaurant: any = [];
 
  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) { }
   /* ngonInit is a lifecycle hook managed by angular and it is called to show that angular is created a component*/
  ngOnInit(): void {
    console.log(this.route.snapshot.params['hotelId']);
    this. id= this.route.snapshot.params['id'];

    this.restaurant = new Restaurant();
    this.restaurantService.getRestaurantById(this.id).subscribe( data => {
      this.restaurant = data;
    });
  }

}
 
  







