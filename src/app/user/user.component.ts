import { Component, OnInit } from '@angular/core';
import {UserItem} from '../models/user-item';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userItem: UserItem;
  
  constructor() { }

  ngOnInit(): void {
    this.userItem = {
      id: 1,
      name: "Антон",
      surname: "Владимирович",
      lastname: "Белуха",
      phone: 80974572106,
      email: "forsakenanton@gmail.com",
      city: "Кривой Рог"
    }
  }
}
