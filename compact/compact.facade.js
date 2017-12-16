import { InfoComponent } from 'ng2-resume/compact/info';
import {
  AboutComponent,
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
} from 'ng2-resume/default/default.facade';

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

export const COMPACT_DIRECTIVES = DIRECTIVES;
export const COMPACT_DECLARATIONS = [ ...DIRECTIVES ];
