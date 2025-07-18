import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select } from '../select/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application',
  imports: [Select, FormsModule],
  templateUrl: './application.html',
  styleUrl: './application.css'
})
export class Application {
  
  // Form data object
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    educationLevel: '',
    institution: '',
    experience: '',
    resume: null as File | null
  };

  // Validation errors object
  validationErrors = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    educationLevel: '',
    institution: '',
    resume: ''
  };

  internshipsArr = [
    {
      label: "Frontend Developer",
      link: "/careers/frontend-developer-internship",
      description: "Join our frontend team and create amazing user interfaces using modern web technologies.",
      roles: [
        "Develop responsive frontend and interactive web applications",
        "Implement user interface designs.",
        "Work with modern frontend frameworks and libraries",
        "Optimize applications for maximum speed and scalability"
      ],
      responsibilities: [
        "Write clean, semantic code",
        "Implement responsive design principles",
        "Collaborate with designers to translate mockups into code",
        "Debug and fix cross-browser compatibility issues",
        "Stay updated with latest frontend technologies and trends"
      ]
    },
    {
      label: "Backend Developer",
      link: "/careers/backend-developer-internship",
      description: "Work on server-side development and build robust APIs and database systems that power our applications.",
      roles: [
        "Design and develop server-side applications and APIs",
        "Work with databases and data modeling",
        "Implement authentication and security measures",
        "Optimize server performance and scalability"
      ],
      responsibilities: [
        "Write server-side code.",
        "Design and implement RESTful APIs",
        "Work with SQL and NoSQL databases",
        "Implement data validation and error handling",
        "Monitor application performance and troubleshoot issues"
      ]
    },
    {
      label: "UI/UX Designer",
      link: "/careers/ui-ux-internship",
      description: "Create intuitive and beautiful user experiences through research, wireframing, prototyping, and visual design.",
      roles: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and mockups",
        "Develop design systems and style guides"
      ],
      responsibilities: [
        "Research user needs and behaviors",
        "Design wireframes and interactive prototypes",
        "Conduct usability testing and iterate on designs",
        "Collaborate with developers to ensure design implementation"
      ]
    },
    {
      label: "Software Developer",
      link: "/careers/software-developer-internship",
      description: "Join our team as a Software Engineer Intern and work on real-world projects using modern technologies.",
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
        "Work on real-world projects using modern technologies"
      ]
    },
    {
      label: "Junior HR",
      link: "/careers/junior-human-resource-internship",
      description: "Support our HR team in talent acquisition, employee management, and organizational development initiatives.",
      roles: [
        "Assist in recruitment and hiring processes",
        "Support employee onboarding and training programs",
        "Help maintain employee records and databases",
        "Participate in HR policy development and implementation"
      ],
      responsibilities: [
        "Screen resumes and conduct initial candidate interviews",
        "Coordinate interview schedules and communications",
        "Assist in organizing team events and employee engagement activities",
        "Update and maintain HR documentation",
        "Support performance review processes and feedback collection"
      ]
    },
    {
      label: "Business Analyst",
      link: "/careers/business-analyst-internship",
      description: "Analyze business processes and requirements to help drive strategic decisions and improve operational efficiency.",
      roles: [
        "Analyze business processes and identify improvement opportunities",
        "Gather and document business requirements",
        "Create process flows and documentation",
        "Support project management and implementation"
      ],
      responsibilities: [
        "Conduct stakeholder interviews and requirement gathering sessions",
        "Create detailed business requirement documents",
        "Analyze data trends and prepare reports",
        "Support testing and validation of business solutions",
        "Facilitate communication between technical and business teams"
      ]
    },
    {
      label: "Research & Development",
      link: "/careers/rnd-internship",
      description: "Contribute to innovative research projects and help develop cutting-edge solutions for emerging technologies.",
      roles: [
        "Conduct research on emerging technologies and trends",
        "Assist in prototype development and testing",
        "Analyze research data and prepare reports",
        "Support innovation initiatives and proof of concepts"
      ],
      responsibilities: [
        "Research industry trends and competitive analysis",
        "Experiment with new technologies and frameworks",
        "Document research findings and recommendations",
        "Collaborate with development teams on innovative solutions",
        "Present research findings to stakeholders"
      ]
    },
    {
      label: "QA",
      link: "/careers/qa-internship",
      description: "Ensure software quality through comprehensive testing strategies, automation, and quality assurance processes.",
      roles: [
        "Design and execute test plans and test cases",
        "Perform manual and automated testing",
        "Identify, document, and track software defects",
        "Collaborate with development teams on quality improvements"
      ],
      responsibilities: [
        "Create comprehensive test scenarios and test data",
        "Execute functional, regression, and performance testing",
        "Report bugs and work with developers on resolution",
        "Maintain testing documentation and reports",
        "Support user acceptance testing and deployment processes"
      ]
    },
    {
      label: "Software Tester",
      link: "/careers/software-tester-internship",
      description: "Focus on manual and automated testing to ensure software applications meet quality standards and user requirements.",
      roles: [
        "Execute manual testing across web and mobile platforms",
        "Learn and implement automated testing frameworks",
        "Perform exploratory and usability testing",
        "Support regression testing and release validation"
      ],
      responsibilities: [
        "Test software applications for functionality and usability",
        "Create and maintain test cases and testing documentation",
        "Report and track defects through their lifecycle",
        "Collaborate with QA team on testing best practices",
        "Support continuous integration and testing processes"
      ]
    },
    {
      label: "Business Executive",
      link: "/careers/business-executive-internship",
      description: "Support business operations, client relationships, and strategic initiatives to drive company growth and success.",
      roles: [
        "Assist in business development and client acquisition",
        "Support sales and marketing initiatives",
        "Help manage client relationships and communications",
        "Participate in strategic planning and market analysis"
      ],
      responsibilities: [
        "Conduct market research and competitive analysis",
        "Support lead generation and customer outreach",
        "Assist in proposal writing and presentation preparation",
        "Maintain client databases and communication records",
        "Support business development meetings and follow-ups"
      ]
    }
  ];

  public internship: any;
  public showForm: any;
  public showSuccess: boolean = false;

  educationOptions = [
    { value: 'high-school', label: 'High School' },
    { value: 'undergraduate', label: 'Undergraduate' },
    { value: 'graduate', label: 'Graduate' },
    { value: 'postgraduate', label: 'Postgraduate' }
  ];

  setShowForm(state = true) {
    this.showForm = state;
    // Clear validation errors when switching forms
    this.clearValidationErrors();
  }

  validateForm(): boolean {
    this.clearValidationErrors();
    let isValid = true;

    // First Name validation
    if (!this.formData.firstName.trim()) {
      this.validationErrors.firstName = 'First name is required';
      isValid = false;
    } else if (this.formData.firstName.trim().length < 2) {
      this.validationErrors.firstName = 'First name must be at least 2 characters';
      isValid = false;
    }

    // Last Name validation
    if (!this.formData.lastName.trim()) {
      this.validationErrors.lastName = 'Last name is required';
      isValid = false;
    } else if (this.formData.lastName.trim().length < 2) {
      this.validationErrors.lastName = 'Last name must be at least 2 characters';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.formData.email.trim()) {
      this.validationErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(this.formData.email)) {
      this.validationErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!this.formData.phone.trim()) {
      this.validationErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(this.formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      this.validationErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Education Level validation - now handled by select component
    if (!this.formData.educationLevel) {
      this.validationErrors.educationLevel = 'Education level is required';
      isValid = false;
    }

    // Institution validation
    if (!this.formData.institution.trim()) {
      this.validationErrors.institution = 'Institution/University is required';
      isValid = false;
    }

    // Resume validation
    if (!this.formData.resume) {
      this.validationErrors.resume = 'Resume/CV is required';
      isValid = false;
    } else {
      // File size validation (5MB = 5 * 1024 * 1024 bytes)
      const maxSize = 5 * 1024 * 1024;
      if (this.formData.resume.size > maxSize) {
        this.validationErrors.resume = 'File size must be less than 5MB';
        isValid = false;
      }

      // File type validation
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(this.formData.resume.type)) {
        this.validationErrors.resume = 'Only PDF, DOC, and DOCX files are allowed';
        isValid = false;
      }
    }

    return isValid;
  }

  clearValidationErrors() {
    this.validationErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      educationLevel: '',
      institution: '',
      resume: ''
    };
  }

  submitApplication() {
    if (this.validateForm()) {
      // Print form data to console
      console.log('Application Form Data:', {
        personalInfo: {
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          email: this.formData.email,
          phone: this.formData.phone
        },
        education: {
          level: this.formData.educationLevel,
          institution: this.formData.institution
        },
        experience: this.formData.experience,
        resume: this.formData.resume ? {
          name: this.formData.resume.name,
          size: this.formData.resume.size,
          type: this.formData.resume.type
        } : null,
        appliedFor: this.internship?.label,
        submittedAt: new Date().toISOString()
      });

      this.showSuccess = true;
      this.showForm = false;
    } else {
      console.log('Form validation failed');
    }
  }

  closeApplication() {
    this.resetForm();
    this.router.navigate(['/']);
  }

  onEducationChange(value: string) {
    this.formData.educationLevel = value;
    // Clear education level error when user selects an option
    if (value) {
      this.validationErrors.educationLevel = '';
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formData.resume = file;
      // Clear resume error when file is selected
      this.validationErrors.resume = '';
      
      // Validate file immediately
      const maxSize = 5 * 1024 * 1024;
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (file.size > maxSize) {
        this.validationErrors.resume = 'File size must be less than 5MB';
        this.formData.resume = null;
      } else if (!allowedTypes.includes(file.type)) {
        this.validationErrors.resume = 'Only PDF, DOC, and DOCX files are allowed';
        this.formData.resume = null;
      } else {
        console.log('File selected:', file.name);
      }
    }
  }

  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      educationLevel: '',
      institution: '',
      experience: '',
      resume: null
    };
    this.clearValidationErrors();
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.internship = this.internshipsArr.find(intrn =>
        intrn.link.endsWith(id ? id : '')
      );
    });
  }
}
