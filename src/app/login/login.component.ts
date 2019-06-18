import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  restuarantId = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onclick(restuarantId) {
    if(!this.isValid(restuarantId)) {
      alert("Please Enter Valid Restuarant ID");
      return;
    } else {
        this.router.navigate([restuarantId]);
    }
  }
  isValid(restuarantId) {
    if(restuarantId == "Archit") {
      return true;
    } else {
      return false;
    }
  }

}
