package com.example.FullStackProject.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.FullStackProject.exception.ResourceNotFoundException;
import com.example.FullStackProject.model.SwiggyDetails;
import com.example.FullStackProject.repository.RestaurantRepository;
/*@RestController-having 2 annotations:Response body and Controller
 * This annotation is used at the class level and allows the class to handle the requests made by the client. 
 * 
 * @RequestMapping-used to map the web request
 * 
 * */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Swiggy/")
public class RestaurantController {
	@Autowired
	private RestaurantRepository restaurantRepo;
	/* @PostMapping- method handles the Http POST requests matched with the specified URL
	 * @RequestBody- Objects are passed as a parameter to swiggy model table
	 * 
	 * In this Mapping ,we get all the restaurant details in the form of Swiggy model object   */

	@PostMapping("/Restaurants")
	public SwiggyDetails createHotel(@RequestBody SwiggyDetails hotel) {
		return restaurantRepo.save(hotel);
	}
	/* @GetMapping-Display all the details of the restaurant of a particular id. to get this id ,we use @PathVariable 
	 * by using http  get request*/
	@GetMapping("/Restaurants/{id}")
	public ResponseEntity<SwiggyDetails> getHotelById(@PathVariable int id) {
		SwiggyDetails hotel= restaurantRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));
		return ResponseEntity.ok(hotel);
	}
	/*@PutMapping- Update the restaurant details of the particular id. By using @DynamicUpdate we change the 
	 * particular attribute by using http put request */
	@PutMapping("/Restaurants/{id}")
	public ResponseEntity<SwiggyDetails> updateHotel(@PathVariable int id, @RequestBody SwiggyDetails hotel){
		SwiggyDetails hotelUpd = restaurantRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));

		hotelUpd.setFoodType(hotel.getFoodType());
		hotelUpd.setLocation(hotel.getLocation());
		hotelUpd.setRestaurantName(hotel.getRestaurantName());
		hotelUpd.setRating(hotel.getRating());
		hotelUpd.setOwnerName(hotel.getOwnerName());
		SwiggyDetails updatedHotels = restaurantRepo.save(hotelUpd);
		return ResponseEntity.ok(updatedHotels);
	}
	/*@DeleteMapping-Delete the particular id of the restaurant detail by using http delete request*/
	@DeleteMapping("/Restaurants/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteHotels(@PathVariable int id){
		SwiggyDetails delHotel=restaurantRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));

		restaurantRepo.delete(delHotel);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	/*@DeleteMapping-Delete the all the records of the restaurant detail by using http delete request*/
	@DeleteMapping("/Restaurants")
	public ResponseEntity<HttpStatus> deleteAllRes() {
		try {
			restaurantRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	/* @GetMapping-Display all the details of the restaurants by using http  get request
	      and also to search the particular restaurant by restaurant list */
	@GetMapping("/Restaurants")
   public ResponseEntity<List<SwiggyDetails>> getAllRestaurants(@RequestParam(required = false) String name){
    try {
       List<SwiggyDetails> restaurantList = new ArrayList<SwiggyDetails>();
       if(name != null) {
           restaurantRepo.findByRestaurantNameContaining(name).forEach(restaurantList::add);
           return new ResponseEntity<>(restaurantList, HttpStatus.OK);
           }
        else {
           restaurantList = restaurantRepo.findAll();
           return new ResponseEntity<>(restaurantList, HttpStatus.OK);
             }
           }
        catch(Exception excep) {
          return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
         }
        }
	/* In this method to search the particular veg list from restaurant list*/
	@GetMapping("/Restaurants/veg")
	public ResponseEntity<List<SwiggyDetails>> findByVegHotel(){
		try { 
			List<SwiggyDetails> vegHotelList=restaurantRepo.findByfoodType("veg");
			if(vegHotelList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				} 
			return new ResponseEntity<>(vegHotelList,HttpStatus.OK); 
			} 
		catch(Exception e) { 
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); 
			}
		}
	/* In this method to search the particular non veg list  from restaurant list*/
	@GetMapping("/Restaurants/nonveg")
	public ResponseEntity<List<SwiggyDetails>> findByNonVegHotel(){
		try { 
			List<SwiggyDetails> nonVegHotelList=restaurantRepo.findByfoodType("nonveg");
			if(nonVegHotelList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				} 
			return new ResponseEntity<>(nonVegHotelList,HttpStatus.OK);
			} 
		catch(Exception e) { 
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			} 
		}
	
	
	
}




