import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
  
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  
  getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  

}
