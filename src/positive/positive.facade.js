import { AboutComponent } from './about.component';
import {
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
} from '../default/default.facade';

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
