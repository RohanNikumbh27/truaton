import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-internships',
  imports: [ ],
  templateUrl: './internships.html',
  styleUrl: './internships.css'
})
export class Internships {
  internshipsArr = [
    {
      label: "Frontend Developer",
      link: "/frontend-developer-internship"
    },
    {
      label: "Backend Developer",
      link: "/backend-developer-internship"
    },
    {
      label: "UI/UX Designer",
      link: "/ui-ux-internship"
    },
    {
      label: "Software Developer",
      link: "/software-developer-internship"
    },
    {
      label: "Junior HR",
      link: "/junior-human-resource-internship"
    },
    {
      label: "Business Analyst",
      link: "/business-analyst-internship"
    },
    {
      label: "Research & Development",
      link: "/rnd-internship"
    },
    {
      label: "QA",
      link: "/qa-internship"
    },
    {
      label: "Software Tester",
      link: "/software-tester-internship"
    },
    {
      label: "Business Executive",
      link: "/business-executive-internship"
    },
  ]

}
