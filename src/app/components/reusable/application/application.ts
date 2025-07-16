import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select } from '../select/select';

@Component({
  selector: 'app-application',
  imports: [Select],
  templateUrl: './application.html',
  styleUrl: './application.css'
})
export class Application {
  
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
        "Learn and adapt to new technologies as required",
        "Work on real-world projects using modern technologies",
        "Write clean, maintainable, and efficient code",
        "Debug and resolve technical issues",
        "Document development processes and codebase changes",
        "Learn and adapt to new technologies as required",
        "Work on real-world projects using modern technologies",
        "Write clean, maintainable, and efficient code",
        "Debug and resolve technical issues",
        "Document development processes and codebase changes",
        "Learn and adapt to new technologies as required",
        "Work on real-world projects using modern technologies",
        "Write clean, maintainable, and efficient code",
        "Debug and resolve technical issues",
        "Document development processes and codebase changes",
        "Learn and adapt to new technologies as required",
        "Work on real-world projects using modern technologies",
        
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
  public internship: any;
  public showForm: any;

  educationOptions = [
    { value: 'high-school', label: 'High School' },
    { value: 'undergraduate', label: 'Undergraduate' },
    { value: 'graduate', label: 'Graduate' },
    { value: 'postgraduate', label: 'Postgraduate' }
  ];

  setShowForm( state = true){
    this.showForm = state;
  }

  closeApplication() {
    this.router.navigate(['/']);
  }

  onEducationChange(value: string) {
    console.log('Selected education level:', value);
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      // Find internship whose link ends with the id
      this.internship = this.internshipsArr.find(intrn =>
        intrn.link.endsWith(id ? id : '')
      );
    });
  }
}
