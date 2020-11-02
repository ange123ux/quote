import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['Programming is not about what you know; it is about what you can figure out.', 'May the code be with you all!']
  } 
}