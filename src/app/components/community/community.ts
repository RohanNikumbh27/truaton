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
    { office: 'Russia', image: '/Truaton_Russia.png' },
    { office: 'Chennai', image: '/Truaton_Chennai.png' },
    { office: 'China', image: '/Truaton_China.png' },
  ];
}
