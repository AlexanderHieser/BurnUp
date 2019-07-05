import { Component, OnInit } from '@angular/core';
import { GitHubAPIService } from '../services/git-hub-api.service';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

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
    console.log('Get projects');
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
