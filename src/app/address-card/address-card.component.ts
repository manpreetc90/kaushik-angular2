import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  // tslint:disable-next-line: no-input-rename
  @Input('name') userName: string;
  constructor() {
   }

  ngOnInit() {
    this.user = {
      name : this.userName,
      title: 'Software Developer',
      address: '66 SG Palya, Bangalore',
      phone: [
        '7829297366',
        '7878787878',
      ]
    };
  }

}
