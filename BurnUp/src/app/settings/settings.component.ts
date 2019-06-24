import { Component, OnInit } from '@angular/core';
import { GitHubAPIService } from '../services/git-hub-api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  baseURL ="";
  accessToken="";

  constructor(public gitHub: GitHubAPIService) { }

  ngOnInit() {
    this.baseURL  = this.gitHub.baseURL;
    this.accessToken = this.gitHub.accessToken;
  }

  updateCredentials() {
    this.gitHub.accessToken = this.accessToken;
    this.gitHub.baseURL = this.baseURL;
  }


}
