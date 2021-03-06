import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename tslint:disable-next-line: no-inferrable-types
  @Input('user') user: User;
  // tslint:disable-next-line: no-inferrable-types
  isCollapsed: boolean = true;
  constructor() {
   }

   toggleCollapse() {
     this.isCollapsed = !this.isCollapsed;
   }
  ngOnInit() {

  }

}
