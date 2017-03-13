import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'pa-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = "Projects, social & contact";
  user:any[];
  repos: any[];
  username: string;
  
  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user=> {
      console.log(user);
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit() {
  }

}
