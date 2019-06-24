import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubAPIService {

  accessToken = '7771d77cf181f63e2a081dc40ae0a2df85b10712';
  baseURL = 'https://api.github.com';

  projects: any;
  constructor(private http: HttpClient) { }


  getRepositories() {
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
