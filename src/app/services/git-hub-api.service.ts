import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageServiceService } from './storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class GitHubAPIService {

  accessToken = '';
  baseURL = '';

  projects: any;
  constructor(private http: HttpClient, storage: StorageServiceService) { 
    this.accessToken = storage.getAuthToken();
    this.baseURL = storage.getEndpoint();
  }


  getRepositories() {
    console.log("Token", this.accessToken, this.baseURL);
    
    return new Promise<boolean>((resolve, reject) => {
      const options = new HttpHeaders({
        Authorization: 'token ' + this.accessToken
      });
      this.http.get(this.baseURL + '/user/repos', {headers: options}).subscribe((data) => {
        this.projects = data;
        resolve();
      });
    });
  }

  authUser(): Observable<any> {
    const options = new HttpHeaders({
      Authorization: this.accessToken
    });
    return this.http.get(this.baseURL + '/user', { headers : options});
  }

  getIssues(projectIssues: string) {
    return new Promise<any>((resolve, reject) => {
      const options = new HttpHeaders({
        Authorization: 'token ' + this.accessToken
      });
      this.http.get(projectIssues, {headers: options}).subscribe((data) => {
        resolve(data);
      });
    });
  }
}
