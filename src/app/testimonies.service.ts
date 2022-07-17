import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TestimoniesService {

  constructor(public http:HttpClient) { }
  gettestmoniesdata() {
    return this.http.get('http://localhost:3000/testmonies');
    // return this.http.get(`${this.server_address}/books`);

  }
}
