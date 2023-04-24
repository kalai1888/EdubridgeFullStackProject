import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements  OnInit {

 /*declare a restaurant in array and also variable in string*/

  restaurant: Restaurant[] = [];
  restaurantName : String = '';
  restaurantFoundBySearch : Restaurant[] = [];
/*constructor is a method in a ts class that automaticallly gets called when the cls is being instatiatd and also usd for inject dependencies/services into the component cls*/

  constructor(private restaurantService: RestaurantService,
    private router: Router) { }
    /* ngonInit is a lifecycle hook managed by angular and it is called to show that angular is created a component*/
  ngOnInit(): void {
    this.getRestaurants();
  }
      /* This method calling  an restaurant service cls and inside invoke the getRestaurant list*/
  private getRestaurants(){
    this.restaurantService.getRestaurantsList().subscribe(data => {
      this.restaurant = data;

      
    });
  }
    /* This method  passing the id to the restaurant details and  calling the respctive component page */
  restaurantDetails(id: number){
   
    this.router.navigate(['restaurant-details', id]);
  }
 /* This method  passing the id to the  update-restaurant  and  calling the respctive component page */
  updateRestaurant(id: number){
    this.router.navigate(['update-restaurant', id]);
  }
  /* This method  passing the id calling  an restaurant service cls and inside invoke the deleteRestaurantbyid */
  deleteRestaurant(id: number){
    this.restaurantService.deleteRestaurant(id).subscribe( data => {
      console.log(data);
      this.getRestaurants();
    })
  }
/* This method is delete the  all records from the restaurant list */
  removeAllRes(): void {
    var status = confirm("your want to delete all record?");
    if(status==true){

    this.restaurantService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.getRestaurants();
      },
      error => {
        console.log(error);
      });
    
  }else{
    this.getRestaurants();
  }
  }
  /* This method is delete the record from the restaurant list */
  confirmDelete(restaurant : Restaurant){
    var status= confirm("You want to delete this record?");
     if (status==true) {
       this.deleteRestaurant(restaurant.hotelId);
          }
     else{
      this.getRestaurants();
     }
      
}
/* In this method search the restaurant by using restaurant list */
searchByName(){
  this.restaurantService.findByName(this.restaurantName).subscribe( data => {
    this.restaurant= data;
    console.log(data);
  },
  error => {
    console.log(error);
  });

}
/* this method  is fetch the veghotel list from the restaurant list */
fetchVegHotel(){
   this.restaurantService.findByVegRestaurant().subscribe( data => { 
    this.restaurant = data;
     console.log(data);
     },
      error => {
         console.log(error);
         }); 
        } 
           /* this method  is fetch the non veghotel list from the restaurant list */
  fetchNonVegHotel(){
     this.restaurantService.findByNonVegRestaurant().subscribe( data => { 
      this.restaurant = data; 
      console.log(data);
     },
      error => { 
        console.log(error);
       }); 
      }

}
