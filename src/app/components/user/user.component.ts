import { Component, OnInit } from '@angular/core';
import { User } from './Models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // properties
  user: User;

  // methods
  constructor() {
  }

  ngOnInit() {
    this.user = {
      firstName : 'Joe',
      lastName : 'Roe',
      age : 30,
      address : {
        street: '370 Hollyberry Trail',
        city: 'North York',
        state: 'Ontario'
      }
    };
  }

}

