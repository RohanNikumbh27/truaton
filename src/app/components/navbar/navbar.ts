import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  showMenu = false;
  isClosing = false;
  closed = true;

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
    },
    {
      label: "Contact",
      id: "#contact"
    },
  ]

  toggleMenu() {
    // if (this.showMenu) {
    //   this.isClosing = true;
    //   setTimeout(() => {
    //     this.isClosing = false;
    //     this.showMenu = !this.showMenu;
    //   }, 350);
    //   setTimeout(() => {
    //     this.closed = true;
    //   }, 400);
    // } else {
      this.showMenu = !this.showMenu;
      // this.isClosing = false;
      // this.closed = false;
    // }
  }
}
