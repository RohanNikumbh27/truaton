import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,  // Assuming you're using Angular 20 standalone components
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class Card {
  @Input() cardData!: { office: string; image: string };
}
