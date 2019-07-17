import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu-staff',
  templateUrl: './edu-staff.component.html',
  styleUrls: ['./edu-staff.component.scss']
})
export class EduStaffComponent implements OnInit {
  edutitle : string="Our Education staff";
  eduspan : string="Learn From Best Staff";
  edup : string="Vestibulum at magna tellus. Vivamus sagittis et nunc ut in orci aliquam, ac vulputa leo vehicula. Mauris porttit magna tellus. Vivamus sagittis et nunc.";
  
  cardimg1 : string="assets/img/staff1.jpg";
  cardimg2 : string="assets/img/staff2.jpg";
  cardimg3 : string="assets/img/staff3.jpg";
  
  cardtitle : string="Card title";
  cardtext : string="Some quick example text to build on the card title and make up the bulk of the card's content.";
  constructor() { }

  ngOnInit() {
  }

}
