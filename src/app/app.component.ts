import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  quotes:Quote[] = [
    new Quote(1, 'May the code be with you all!', 'Mark Doe', 'Ange', new Date(2020,8,3), 0, 0),
  ];
}