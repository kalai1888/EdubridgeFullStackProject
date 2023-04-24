import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

  restaurantName='';
  ownerName='';
  foodType='';
  rating='';
  location='';

 restaurant: Restaurant = new Restaurant();
/*constructor is a method in a ts class that automaticallly gets called when the cls is being instatiatd and also usd for inject dependencies/services into the component cls*/
constructor(private restaurantService: RestaurantService,

 private router: Router) { }
 /* ngonInit is a lifecycle hook managed by angular and it is called to show that angular is created a component*/
 ngOnInit(): void {

  }
/* In this method calling an restaurant service cls and also invoke the createrestaurant */ 
 saveRestaurant(){

    this.restaurantService.createRestaurant(this.restaurant).subscribe( data =>{

      console.log(data);

      this.goToRestaurantList();

    },

    error => console.log(error));

  }
  /* This method  go for the restaurant and  calling the respctive component page */
 goToRestaurantList(){

    this.router.navigate(['/restaurant']);

  }
  /* This method is used for view the pop up message by fill the details or not in the insert restaurant*/
  onSubmit(){
    if((this.restaurant.restaurantName === '') || (this.restaurant.ownerName ==='') || (this.restaurant.foodType === '') || (this.restaurant.rating<1) || (this.restaurant.location==='') ){
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
    var status=confirm("Do you want to insert restaurant records?");
    if(status==true){
    var status=confirm("inserted successfully!");
    console.log(this.restaurant);
     this.saveRestaurant();
    }
  }
}
}