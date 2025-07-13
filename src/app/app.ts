import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Internships } from './components/internships/internships';
import { Community } from './components/community/community';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Contact, Footer, Hero, Services, Internships, Community],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('truaton');
}
