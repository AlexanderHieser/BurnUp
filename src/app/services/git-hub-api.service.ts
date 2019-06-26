import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubAPIService {

  accessToken = '066915e00a9803e560cecbb2ed58a2e9edc19cee';
  baseURL = 'https://api.github.com';

  projects: any;
  constructor(private http: HttpClient) { }


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
