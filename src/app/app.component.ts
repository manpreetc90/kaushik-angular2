import { Component } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  constructor() {
    // tslint:disable-next-line: prefer-const
    this.user = new User();
    this.user.name = 'Manpreet';
    this.user.address = '66 SG Palsya,Bangalore';
    this.user.designation = 'Software Engineer';
    this.user.phone = [
      '7829297366'
    ];
  }
}
