import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
  sources;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.sources = data['sources'];
    });


  }

}
