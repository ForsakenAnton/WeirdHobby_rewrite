import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { from } from 'rxjs';
import {MyHobbyItem} from '../models/my-hobby-item';
import { MyHobbyService } from '../services/my-hobby-service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css'],
  providers: [MyHobbyService]
})
export class HobbyComponent implements OnInit {

//myHobbyItem: MyHobbyItem;
  myHobby;// = {};

  constructor(private myHobbyService: MyHobbyService) { }

  ngOnInit(): void {
    this.myHobby = this.myHobbyService.getHobby();
    // this.myHobbyItem = {
    //   id: 1,
    //   name: "Мое 'странное' хобби",
    //   description: "Странное... много людей играет (а еще больше лабает, но не о них) на гитаре. Но немного играет классику, эмбиент, фолк, а так же с полтора десятка своих пьес, каждая из которых в среднем - от 10 минут. И делает это на аккустической гитаре(железострунка, как говорят) с недетстким размером струн 12-56. но классическую гитару так же люблю (с нейлоновыми струнами, если коротко). \n\t Так вот странное в моем хобби то, что я не разу серьезно не пытался записаться в студии, мало когда выношу это на публику, но играю вполне сносно и если постараться могу и очень хорошо. <ДЕЛЕТЕ>Только вот не дает написание этого опуса</ДЕЛЕТЕ>Мне как и всегда нужно минимум полтора часа на инструмент. Не считая чистки + настройки. Так что я стараюсь, можно сказать, чисто для ... себя наверное. Но очень хочется это исправить. И чтоб хобби больше не было странным. Вот."
    //}
  }


  onClickAndCtrl(e) {
     console.log(e.target.innerText);
     console.log(e.ctrlKey);
     console.log(e.target.id);
     
    if(e.ctrlKey) {
      //let element = document.getElementById("myHobbyName");
      let sibling = document.getElementById(e.target.id).nextElementSibling;
      let element = document.getElementById(sibling.id);
      console.log(element.id);
      element.style.display = "block";
    }
  }

  onDownEnter(e) {
    //console.log(e);
    let sibling = document.getElementById(e.target.id).previousElementSibling;
    let element = document.getElementById(sibling.id);
    console.log(element.id);

    //console.log(element);
    if(element.innerText === '') {
      //alert("Введите что нибудь");
      return;
    }
      


    if(e.keyCode === 13) {
      console.log("Enter work!");

      // выше таки смог в универсальный метод!
      document.getElementById(e.target.id).style.display = "none";

      // ниже код 'какНеНадоПисать'

      //let inputs = document.querySelectorAll("input");
      //let textareas = document.querySelectorAll("textarea");
      //elements.style.display = "none";
      //console.log(inputs.length);

      // если их много - закрываем все (минус здесь очевидный)
      // да, и выше не смог в универсальный метод - написал два
      // inputs.forEach(input => {
      //   if(input.style.display === "block")
      //   input.style.display = "none";
      //   console.log(input.style.display);
      // });

      // textareas.forEach(textarea => {
      //   if(textarea.style.display === "block")
      //   textarea.style.display = "none";
      //   console.log(textarea.style.display);
      // });
    }
  }
}
