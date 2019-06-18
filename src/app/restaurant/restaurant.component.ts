import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {mockorders}  from "../mock-orders";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');
  orders = null;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
  }

  showOrders() {
    this.orders = mockorders;
    console.log("show for order " + this.id);
  }

  showMenu() {
    this.orders = null;
    console.log("show for menu");
  }
}
