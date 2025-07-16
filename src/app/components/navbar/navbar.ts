import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  showMenu = false;
  
  navArr = [
    {
      label: "Apply",
      id: "#apply"
    },
    {
      label: "Services",
      id: "#services"
    },
    {
      label: "Community",
      id: "#community"
    },{
      label: "Contact",
      id: "#contact"
    },
  ]

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
