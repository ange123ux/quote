import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [
    new Quote(id 1, 'Programming is not about what you know; it is about what you can figure out.', 'Chris Pine', 'Ange', new Date(2020,11,7), 0, 0),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
