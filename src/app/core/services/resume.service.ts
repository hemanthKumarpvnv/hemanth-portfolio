import { Injectable } from '@angular/core';
import { Resume } from '../models/resume.model';

@Injectable({ providedIn: 'root' })
export class ResumeService {

  getResume(): Resume {
    return {
      name: 'Hemanth Kumar Pothireddypalli',
      title: 'Senior Angular Developer | Frontend Engineer',
      location: 'Hyderabad, India',
      phone: '+91-9392432015',
      email: 'hemanthkumar.p97@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/hemanth-kumar-pothireddypalli-v-nv',
      languages: ['English', 'Telugu', 'Hindi'],
      github: 'https://github.com/hemanthkumar',
      portfolio: 'https://hemanth-portfolio.com',
      profileImage: 'assets/Hemanth_kumar.png',

      summary: [
        'Senior Frontend Engineer with 6+ years of experience building scalable Single Page Applications using Angular (2-18), TypeScript, and modern frontend architecture.',
        'Strong experience in AngularJS to Angular migration, reusable component architecture, RxJS and NgRx state management, and performance optimization.',
        'Experienced in building enterprise UI applications, integrating REST APIs, and delivering high quality production releases in Agile environments.'
      ],

      skills: [
        'Angular (2-18)',
        'AngularJS',
        'TypeScript',
        'JavaScript ES6+',
        'RxJS',
        'NgRx',
        'Angular Signals',
        'HTML5',
        'CSS3',
        'SCSS',
        'Tailwind CSS',
        'Bootstrap',
        'Angular Material',
        'REST APIs',
        'JSON',
        'Node.js',
        'Git',
        'CI/CD',
        'Jenkins',
        'Jasmine',
        'Karma',
        'Unit Testing',
        'Performance Optimization',
        'Lazy Loading',
        'Modular Architecture'
      ],

      experience: [
        {
          project: 'NGA Fibernet',
          role: 'Frontend Developer',
          description: [
            'Led AngularJS to Angular 18 migration for a large enterprise broadband platform',
            'Improved UI performance by 40 percent using Angular Signals and RxJS optimizations',
            'Engineered reusable UI component libraries reducing development time by 30 percent',
            'Implemented lazy loading and modular architecture improving application load performance',
            'Integrated REST APIs and optimized frontend data communication'
          ]
        },
        {
          project: 'MDU Workflow - Openreach BT Group UK',
          role: 'Frontend Developer',
          description: [
            'Built responsive UI modules using Angular, TypeScript, and SCSS',
            'Created scalable UI components using Angular Material and Tailwind CSS',
            'Optimized application performance using RxJS based state management'
          ]
        },
        {
          project: 'TCP - Openreach BT Group UK',
          role: 'Frontend Developer',
          description: [
            'Delivered enterprise UI features supporting telecom infrastructure workflows',
            'Collaborated with cross functional Agile teams delivering production releases',
            'Maintained high quality code using Jasmine and Karma unit testing'
          ]
        }
      ],

      projects: [
        {
          name: 'NGA Fibernet Order Portal',
          year: '2024',
          summary:
            'Led the AngularJS to Angular 18 migration end-to-end, introducing lazy-loaded feature zones and rehabbing legacy services into typed providers.',
          technologies: ['Angular 18', 'NgRx', 'Storybook']
        },
        {
          name: 'MDU Workflow System',
          year: '2023',
          summary:
            'Crafted responsive, accessible workflows for BT Openreach using Angular Material, ensuring modular scalability for global field teams.',
          technologies: ['Angular 16', 'Material CDK', 'RxJS']
        },
        {
          name: 'TCP Telecom Command Desk',
          year: '2022',
          summary:
            'Delivered enterprise telecom dashboards with a focus on instrumentation, performance budgets, and automated Jasmine/Karma coverage.',
          technologies: ['Angular 15', 'NgRx', 'Jasmine/Karma']
        }
      ],

      timeline: [
        { year: '2019', detail: 'Joined Virtusa Consulting Services as a frontend engineer' },
        { year: '2020', detail: 'Led NGA Fibernet enterprise broadband modernization' },
        { year: '2022', detail: 'Recognized as Star Performer after zero-defect releases' },
        { year: '2023', detail: 'Delivered high-impact enterprise UI teams for telecom clients' }
      ],

      performanceHighlights: [
        'Reduced load time by 40% with Angular Signals and bundle optimization',
        'Implemented lazy loading patterns for every feature module',
        'Optimized RxJS state flows with NgRx selectors and memoized effects'
      ],

      education:
        'B.Tech Computer Science - MLR Institute of Technology, Hyderabad (2019) GPA 7.2/10',

      highlights: [
        '6+ Years Building Scalable Enterprise Angular Applications',
        'AngularJS ? Angular Modernization & Migration Specialist',
        'RxJS, NgRx & Angular Signals Performance Optimization',
        'Angular Material'
      ],

      achievements: [
        'Star Performer Award - 2022',
        'Three Client Appreciation Awards from 2020 to 2023',
        'Zero defect delivery recognition for critical enterprise releases',
        'Improved frontend performance by 30 to 60 percent across enterprise applications'
      ]
    };
  }
}
