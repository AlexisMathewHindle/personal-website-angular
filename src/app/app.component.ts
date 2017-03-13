import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  moduleId: module.id,
  selector: 'pa-root',
  templateUrl: './app.component.html',
  providers: [GithubService]
})
export class AppComponent {
  
  
}
