import { Component } from '@angular/core';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import { Hero } from '../hero/hero';
import { Services } from '../services/services';
import { Internships } from '../internships/internships';
import { Community } from '../community/community';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home-page',
  imports: [ About, Contact, Footer, Hero, Services, Internships, Community, Navbar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
