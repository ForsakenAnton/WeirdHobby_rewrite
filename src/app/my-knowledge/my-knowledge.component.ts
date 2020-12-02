import { Component, OnInit } from '@angular/core';
import {MyKnowledgeItem} from '../models/my-knowledge-item';

@Component({
  selector: 'app-my-knowledge',
  templateUrl: './my-knowledge.component.html',
  styleUrls: ['./my-knowledge.component.css']
})
export class MyKnowledgeComponent implements OnInit {
  myKnowledgeItem: MyKnowledgeItem;

  constructor() { }

  ngOnInit(): void {
    this.myKnowledgeItem = {
      id: 1,
      experiences: ["оператор п/у", 
      "сортировщик-сдатчик металла",
      "технические чертежи"
      ],
      knowledge: [
        "C#", "ADO.NET", "WinForms", "WPF",
        "HTML5 CSS3", "JS",
        "ASP.NET MVC5", "ASP.NET (MVC) CORE", "TS"
      ],
      certificates: []
    }
  }

}
