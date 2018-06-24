import { Component, OnInit } from '@angular/core';
import { User } from '../user/Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName : 'Joe',
        lastName : 'Roe',
        age : 30,
        address : {
          street: '370 Hollyberry Trail',
          city: 'North York',
          state: 'Ontario'
        }
      },
      {
        firstName : 'Dishn',
        lastName : 'Tejani',
        age : 30,
        address : {
          street: '248 Apche Trail',
          city: 'North York',
          state: 'Ontario'
        }
      },
      {
        firstName : 'Simran',
        lastName : 'Rai',
        age : 30,
        address : {
          street: '55 Dundas Steet',
          city: 'Toronto',
          state: 'Ontario'
        }
      }
    ];

    this.addUser({
      firstName : 'Neel',
      lastName : 'Amin',
      // age : 20,
      // address : {
      //   street: '370 steeles ave',
      //   city: 'Etobicoke',
      //   state: 'Ontario'
     // }
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
