import { Component, OnInit } from '@angular/core';
import {MyWorkItem} from '../models/my-work-item';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {
  myWorkItem: MyWorkItem;
  constructor() { }

  ngOnInit(): void {
    this.myWorkItem = {
      id: 1,
      name: "Оператор поста управления станом горячей прокатки",
      experience: "12 лет"
    }
  }

}
