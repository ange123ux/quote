import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['Programming is not about what you know; it is about what you can figure out.', 'In some ways, programming is like painting.', 'May the coding be with you all!']
  } 
}