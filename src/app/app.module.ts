import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'; // !

import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { UserComponent } from './user/user.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyKnowledgeComponent } from './my-knowledge/my-knowledge.component';
import { ResumeComponent } from './resume/resume.component';
import { MyLinksComponent } from './my-links/my-links.component';

import {ImageDirective} from './directives/image.directive';
import { from } from 'rxjs';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    UserComponent,
    MyWorkComponent,
    MyKnowledgeComponent,
    ResumeComponent,
    MyLinksComponent,

    ImageDirective
  ],
  imports: [
    BrowserModule, FormsModule // !
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
