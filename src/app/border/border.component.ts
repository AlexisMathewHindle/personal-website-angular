import { Component, Output, OnInit } from '@angular/core';

@Component({
  selector: 'pa-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css'],
  // inputs: ['title', 'subTitle'],
  outputs: ['title']
})
export class BorderComponent implements OnInit {

 public title: string = "These are words";
 public subTitle: string;

  constructor() {
    // console.log(this.title);
   
  }

  ngOnInit() {
  }

}
