import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'May the code be with you all!', 'Mark Doe', 'Ange', new Date(2020,8,3), 0, 0),
  ];

  constructor() { }

  ngOnInit() {
  }

}
