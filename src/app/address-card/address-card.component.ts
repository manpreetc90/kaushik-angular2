import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  constructor() {
    this.user = {
      name : 'Foo Bar',
      title: 'Software Developer',
      address: '66 SG Palya, Bangalore',
      phone: [
        '7829297366',
        '7878787878'
      ]
    };
   }

  ngOnInit() {
  }

}
