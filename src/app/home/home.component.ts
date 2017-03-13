import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'pa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  // @Input() title: string;
   Title = "hello, I'm Alexis Hindle";
   subTitle = "A <span>Developer</span>, Sailor, Scuba Diver & Cyclist"
   body = "Hello! I’m Alexis Hindle a self-taught Developer with 3 years work experience. I started after returning to shore after a life at sea as a professional sailor."
   bodyTwo = "I am compltely enamoured with what I do and consider myself extremely lucky to have worked in two very different indsutries, both of which i adore."
   bodyThree= "Now I’m based in Lodon, UK, working on some great projects and enjoying life."
    

  constructor(private router: Router) {
    
   }
     
  ngOnInit() {
  }

}
