import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, quote:'Programming is not about what you know; it is about what you can figure out.', author:'Cory House', publisher:'Ange', completeDate: 1/12/2020, upvote:0, downvote:0},
    {id:2,quote:'May the code be with you all!', author:'Nikita Popov', publisher:'Ange', completeDate: 12/12/2019, upvote:0, downvote:0},
  ];

  constructor() { }

  ngOnInit() {
  }

}
