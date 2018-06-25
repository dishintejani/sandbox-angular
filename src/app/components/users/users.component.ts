import { Component, OnInit } from '@angular/core';
import { User } from '../user/Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  // tslint:disable-next-line:no-inferrable-types
  showExtended: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName : 'Joe',
        lastName : 'Roe',
        age : 30,
        image: 'https://loremflickr.com/600/600/people/all',
        address : {
          street: '370 Hollyberry Trail',
          city: 'North York',
          state: 'Ontario'
        },
        isActive: true,
        balance : 300,
        registered : new Date('01/02/2018 12:30:00')
      },
      {
        firstName : 'Dishn',
        lastName : 'Tejani',
        age : 30,
        image: 'https://loremflickr.com/600/600/boy/all',
        address : {
          street: '248 Apche Trail',
          city: 'North York',
          state: 'Ontario'
        },
        isActive: false,
        balance : 200,
        registered : new Date('04/02/2018  22:30:00')
      },
      {
        firstName : 'Simran',
        lastName : 'Rai',
        age : 30,
        image: 'https://loremflickr.com/600/600/girl/all',
        address : {
          street: '55 Dundas Steet',
          city: 'Toronto',
          state: 'Ontario'
        },
        isActive: true,
        balance : 100,
        registered : new Date('05/04/2018 08:30:00')
      }
    ];

    // this.addUser({
    //   firstName : 'Neel',
    //   lastName : 'Amin',
    //   // age : 20,
    //   // address : {
    //   //   street: '370 steeles ave',
    //   //   city: 'Etobicoke',
    //   //   state: 'Ontario'
    //  // }
    // });
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  // addUser(user: User) {
  //   this.users.push(user);
  // }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '3rem'
    };
  }

}


