import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  id: number = 0;
  restaurant: Restaurant = new Restaurant();
  /*constructor is a method in a ts class that automaticallly gets called when the cls is being instatiatd and also usd for inject dependencies/services into the component cls*/
  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }
 /* ngonInit is a lifecycle hook managed by angular and it is called to show that angular is created a component*/
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.restaurantService.getRestaurantById(this.id).subscribe(data => {
      this.restaurant = data;
    }, error => console.log(error));
  }
 /* This method is used for view the pop up message by fill the details or not in the update restaurant*/
  onSubmit(){
    this.restaurantService.updateRestaurant(this.id, this.restaurant).subscribe( data =>{
      if(this.restaurant.restaurantName === '' || this.restaurant.ownerName ==='' || this.restaurant.foodType === '' || this.restaurant.rating <1 || this.restaurant.location === '' ){
        var status = confirm("Please fill all the fields");
      }
      else{
        var status = confirm("Your details are updated successfully!");
        this.goToRestaurantList();
      }
    }
    , error => console.log(error));
  }
  /* this method calling an restaurant and respctive component page */
  goToRestaurantList(){
    this.router.navigate(['/restaurant']);
  }

  }
