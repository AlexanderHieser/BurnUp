import { Component, OnInit } from '@angular/core';
import { GitHubAPIService } from '../services/git-hub-api.service';
import { StorageServiceService } from '../services/storage-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  baseURL = '';
  accessToken = '';

  constructor(public gitHub: GitHubAPIService, private storage: StorageServiceService) { }

  ngOnInit() {
    console.log('Get from storage');
    this.baseURL  = this.storage.getEndpoint();
    this.accessToken = this.storage.getAuthToken();
  }

  updateCredentials() {
    this.gitHub.accessToken = this.accessToken;
    this.gitHub.baseURL = this.baseURL;
    this.storage.setAuthToken(this.accessToken);
    this.storage.setEndpoint(this.baseURL);
    this.ngOnInit();
  }
}
