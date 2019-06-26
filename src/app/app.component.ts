import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { GitHubAPIService } from './services/git-hub-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BurnUp';

  projects = [];

  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: 'home',
      icon: 'home-outline'
    },
    {
      title: 'Projects',
      link: 'dashboard',
      icon: 'list-outline',
      children: this.projects
    }, {
      title: 'Settings',
      link: 'settings',
      icon: 'settings-outline'
    }];

  constructor(githubApi: GitHubAPIService) {
    console.log("Get projects");
    
    githubApi.getRepositories().then((data) => {
      let count = 0;
      githubApi.projects.forEach(element => {
        console.log(element);
        
        this.projects.push({ title: element.name, link: 'project/', queryParams: { id: count} });
        count++;
      });
    });
  }
}
