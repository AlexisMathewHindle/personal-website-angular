import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = 'c5ceeee236f658261dd9';
  private client_secret = '98e4b565c244875c1ad80d43262d6e290a8379c4';

  constructor(private _http: Http) {
    console.log('Github Service Working...');
    this.username = 'AlexisMathewHindle';
   }
   
    getUser(){
     return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret'+this.client_secret)
     .map(res => res.json());
   }

   getRepos(){
     return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret'+this.client_secret)
     .map(res => res.json());
   }

   updateUser(username:string) {
      this.username = username;
   }
}
