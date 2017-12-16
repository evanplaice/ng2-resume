// positive directives
import { AboutComponent } from 'ng2-resume/positive/about';
import { InfoComponent } from 'ng2-resume/default/components/info';
import { EmploymentComponent } from 'ng2-resume/default/components/employment';
import { ProjectsComponent } from 'ng2-resume/default/components/projects';
import { SkillsComponent } from 'ng2-resume/default/components/skills';
import { ServiceComponent } from 'ng2-resume/default/components/service';
import { EducationComponent } from 'ng2-resume/default/components/education';
import { SocialComponent } from 'ng2-resume/default/components/social';
import { RecognitionComponent } from 'ng2-resume/default/components/recognition';
import { WritingComponent } from 'ng2-resume/default/components/writing';
import { ReadingComponent } from 'ng2-resume/default/components/reading';
import { SpeakingComponent } from 'ng2-resume/default/components/speaking';
import { GovernanceComponent } from 'ng2-resume/default/components/governance';
import { LanguagesComponent } from 'ng2-resume/default/components/languages';
import { SamplesComponent } from 'ng2-resume/default/components/samples';
import { ReferencesComponent } from 'ng2-resume/default/components/references';
import { TestimonialsComponent } from 'ng2-resume/default/components/testimonials';
import { InterestsComponent } from 'ng2-resume/default/components/interests';
import { ExtracurricularComponent } from 'ng2-resume/default/components/extracurricular';
import { AffiliationsComponent } from 'ng2-resume/default/components/affiliations';

const DIRECTIVES = [
  AboutComponent,
  InfoComponent,
  EmploymentComponent,
  ProjectsComponent,
  SkillsComponent,
  ServiceComponent,
  EducationComponent,
  SocialComponent,
  RecognitionComponent,
  WritingComponent,
  ReadingComponent,
  SpeakingComponent,
  GovernanceComponent,
  LanguagesComponent,
  SamplesComponent,
  ReferencesComponent,
  TestimonialsComponent,
  InterestsComponent,
  ExtracurricularComponent,
  AffiliationsComponent
];

export const POSITIVE_DIRECTIVES = [ DIRECTIVES ];
export const POSITIVE_DECLARATIONS = [ ...DIRECTIVES ];
