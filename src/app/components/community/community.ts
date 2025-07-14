import { Component } from '@angular/core';
import { Card } from "../reusable/card/card";

@Component({
  selector: 'app-community',
  imports: [Card],
  templateUrl: './community.html',
  styleUrl: './community.css'
})
export class Community {

  cardArr = [
    { office: 'NEW YORK', image: '/Truaton_New_York.png' },
    { office: 'RUSSIA', image: '/Truaton_Russia.png' },
    { office: 'CHENNAI', image: '/Truaton_Chennai.png' },
    { office: 'CHINA', image: '/Truaton_China.png' },
    { office: 'BANGLORE', image: '/banglore.png' },
    { office: 'MUMBAI', image: '/mumbai.jpeg' },
  ];
}
