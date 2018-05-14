import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestApiService {

  constructor(private http: HttpClient) { }

  get(apiUrl: string) {
    return this.http.get(apiUrl).toPromise();
  }

  post(apiUrl: string, body: any) {
    return this.http.post(apiUrl, body).toPromise();
  }
}
