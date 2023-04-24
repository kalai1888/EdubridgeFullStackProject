import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  /*  This method return a http request in  delete all restaurant  from the base Url and go for backend server */
deleteAll(): Observable<any> {
  return this.httpClient.delete(`${this.baseURL}`);
}
/*  This method return a http request in  restaurant list from the base Url and go for backend server */
findByName(name : any): Observable<Restaurant[]>{
  return this.httpClient.get<Restaurant[]>(`${this.baseURL}?name=${name}`);
}
/* this url get the request and go to the spring boot */

  private baseURL = "http://localhost:8080/Swiggy/Restaurants";


constructor(private httpClient: HttpClient) { }



/*  This method return a http request in  restaurant list    from the base Url and go for backend server */
  getRestaurantsList(): Observable<Restaurant[]>{

    return this.httpClient.get<Restaurant[]>(`${this.baseURL}`);

  }


/*  This method return a http request in   restaurant  from the base Url and go for backend server */

  createRestaurant(restaurant: Restaurant): Observable<Object>{

    return this.httpClient.post(`${this.baseURL}`, restaurant);

  }

/*  This method return a http request in  view the restaurant with hotelId  from the base Url and go for backend server */


  getRestaurantById(hotelId: number): Observable<Restaurant>{

    return this.httpClient.get<Restaurant>(`${this.baseURL}/${hotelId}`);

  }


/*  This method return a http request in  update restaurant with hotelId and restaurant from the base Url and go for backend server */

  updateRestaurant(hotelId: number, restaurant: Restaurant): Observable<Object>{

    return this.httpClient.put(`${this.baseURL}/${hotelId}`, restaurant);

  }
   /*  This method return a http request in  delete restaurant with hotelId  from the base Url and go for backend server */

    deleteRestaurant(hotelId: number): Observable<Object>{

    return this.httpClient.delete(`${this.baseURL}/${hotelId}`);

  }
  /*  This method return a http request in   veg restaurant  from the base Url and go for backend server */
  findByVegRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/veg`);
  }

  /*  This method return a http request in  non veg restaurant  from the base Url and go for backend server */
  findByNonVegRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/nonveg`);
  }


}

  