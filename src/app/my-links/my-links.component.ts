import { Component, OnInit } from '@angular/core';
import { LinksService } from '../services/links-service';

@Component({
  selector: 'app-my-links',
  templateUrl: './my-links.component.html',
  styleUrls: ['./my-links.component.css'],
  providers: [LinksService]
})
export class MyLinksComponent implements OnInit {

  links: string[] = [];

   constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    this.links = this.linksService.getLinks();
  }

}
