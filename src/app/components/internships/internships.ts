import { CommonModule } from '@angular/common'; // Needed for @for
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Needed for routerLink

@Component({
  selector: 'app-internships',
  // Make sure these are in the imports array for standalone components
  imports: [
    CommonModule, // For @for loop
    RouterLink    // For routerLink directive
  ],
  standalone: true, // Assuming you are using standalone components, which is modern Angular
  templateUrl: './internships.html',
  styleUrl: './internships.css'
})
export class Internships {
  internshipsArr = [
    {
      label: "Frontend Developer",
      link: "/careers/frontend-developer-internship"
    },
    {
      label: "Backend Developer",
      link: "/careers/backend-developer-internship"
    },
    {
      label: "UI/UX Designer",
      link: "/careers/ui-ux-internship"
    },
    {
      label: "Software Developer",
      link: "/careers/software-developer-internship",
      description: "Join our team as a Software Engineer Intern and work on real-world projects using modern technologies. You'll collaborate with experienced engineers and contribute to impactful solutions.",
      roles: [
        "Assist in designing, developing, and testing software applications",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and contribute to best practices"
      ],
      responsibilities: [
        "Write clean, maintainable, and efficient code",
        "Debug and resolve technical issues",
        "Document development processes and codebase changes",
        "Learn and adapt to new technologies as required"
      ]
    },
    {
      label: "Junior HR",
      link: "/careers/junior-human-resource-internship"
    },
    {
      label: "Business Analyst",
      link: "/careers/business-analyst-internship"
    },
    {
      label: "Research & Development",
      link: "/careers/rnd-internship"
    },
    {
      label: "QA",
      link: "/careers/qa-internship"
    },
    {
      label: "Software Tester",
      link: "/careers/software-tester-internship"
    },
    {
      label: "Business Executive",
      link: "/careers/business-executive-internship"
    },
  ];
}