import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Resume } from './core/models/resume.model';
import { ResumeService } from './core/services/resume.service';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { SkillsComponent } from './features/skills/skills';
import { ExperienceComponent } from './features/experience/experience';
import { ProjectsComponent } from './features/projects/projects';
import { AchievementsComponent } from './features/achievements/achievements';
import { ContactComponent } from './features/contact/contact';
import { TimelineComponent } from './features/timeline/timeline';
import { PerformanceComponent } from './features/performance/performance';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AchievementsComponent,
    ContactComponent,
    TimelineComponent,
    PerformanceComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resume: Resume;

  private readonly siteUrl = 'https://hemanth-portfolio.com/';

  constructor(
    private resumeService: ResumeService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.resume = this.resumeService.getResume();
  }

  ngOnInit(): void {
    this.applySeo();
  }

  private applySeo(): void {
    const title = `${this.resume.name} · ${this.resume.title}`;
    const description = this.resume.summary[0] ?? 'Enterprise Angular engineer delivering high-performance web apps.';
    const keywords = this.resume.skills.join(', ');
    const imageUrl = `${this.siteUrl}assets/Hemanth_kumar.png`;

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'author', content: this.resume.name });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: this.siteUrl });
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
    this.metaService.updateTag({ property: 'og:image:alt', content: 'Portrait of Hemanth Kumar' });
    this.metaService.updateTag({ property: 'og:site_name', content: 'Hemanth Kumar Portfolio' });
  }
}
