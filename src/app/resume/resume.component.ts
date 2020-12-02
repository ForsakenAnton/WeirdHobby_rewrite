import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  @Input() name: string;
  @Input() surname: string;
  @Input() lastname: string;
  @Input() phone: number;
  @Input() email: string;
  @Input() city: string

  constructor() { }

  ngOnInit(): void {
  }

}
