import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgbanner : string="assets/img/banner.jpg";

  constructor() { }

  ngOnInit() {
  }

}
