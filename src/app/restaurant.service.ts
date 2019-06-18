import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http : HttpClient) { }

  get_menu() {
     return this.http.get("http://localhost:8081/qeats/v1/menu?restaurantId=301728");
  }
  delete_item(item){
    return this.http.post("http://localhost:8081/qeats/v1/restaurant/menu/modify" , item);
  }
}
