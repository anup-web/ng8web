import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  
  users: Object;
  posts: Object;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
      }
    );

    this.data.getPosts().subscribe(
      (data)=>{
        this.posts = data;
      }
    );
    
    this.data.getPhotos().subscribe(
      (data)=>{
        this.photos = data;
      }
    );



  }

}
