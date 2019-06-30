import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  storage = window.localStorage;

  readonly AUTH_TOKEN = 'AUTH_TOKEN';
  readonly API_ENDPOINT = 'API_ENDPOINT';
  constructor() { }

  getAuthToken() {
    return this.storage.getItem(this.AUTH_TOKEN);
  }

  setAuthToken(token: string) {
    this.storage.setItem(this.AUTH_TOKEN, token);
  }

  getEndpoint() {
    return this.storage.getItem(this.API_ENDPOINT)
  }

  setEndpoint(endpoint: string) {
    this.storage.setItem(this.API_ENDPOINT, endpoint)
  }

}
