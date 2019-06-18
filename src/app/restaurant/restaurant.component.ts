import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

import {mockorders}  from "../mock-orders";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');
  orders = null;
  menu = null;
  items = null;
  toDelete = null;

  constructor(private route : ActivatedRoute , private restaurantService : RestaurantService) { }

  ngOnInit() {
    this.showMenu();
  }

  showOrders() {
    this.menu = null;
    this.items = null;
    this.orders = mockorders;
    console.log("show for order " + this.id);
  }

  showMenu() {
    this.orders = null;
    console.log("show for menu");
    this.restaurantService.get_menu().subscribe((res) => { this.menu = res });
    console.log(typeof this.menu);
    if(this.menu != null)
    {
    this.items = this.menu.menu.items;
    console.log(this.items);
    console.log(typeof this.items);}

  }
  onClickDelete(item){
    this.toDelete = {
      restaurantId : this.id,
      action : "add",
      item : item
    }
    console.log(JSON.stringify(this.toDelete));
    this.restaurantService.delete_item(this.toDelete).subscribe();
  }
}
