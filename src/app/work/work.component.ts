import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'pa-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  Title = "Some examples of my work";
  body: string = "This is the content"
  constructor() { }

  ngOnInit() {
  }

}
