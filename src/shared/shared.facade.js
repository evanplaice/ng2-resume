// shared directives
import { ContactsComponent } from './components/contacts.component';
import { CurriculumComponent } from './components/curriculum.component';
import { DurationComponent } from './components/duration.component';
import { HeaderComponent } from './components/header.component';
import { HighlightsComponent } from './components/highlights.component';
import { KeywordsComponent } from './components/keywords.component';
import { SummaryComponent } from './components/summary.component';

// shared models
export { InfoModel } from './models/info.model';
export { MetaModel } from './models/meta.model';
export { DispositionModel } from './models/disposition.model';
export { ContactModel } from './models/contact.model';
export { LocationModel } from './models/location.model';
export { EmploymentModel } from './models/employment.model';
export { ProjectModel } from './models/project.model';
export { SkillsModel } from './models/skills.model';
export { ServiceModel } from './models/service.model';
export { EducationModel } from './models/education.model';
export { SocialModel } from './models/social.model';
export { RecognitionModel } from './models/recognition.model';
export { WritingModel } from './models/writing.model';
export { ReadingModel } from './models/reading.model';
export { SpeakingModel } from './models/speaking.model';
export { GovernanceModel } from './models/governance.model';
export { LanguagesModel } from './models/language.model';
export { SampleModel } from './models/sample.model';
export { ReferenceModel } from './models/reference.model';
export { TestimonialModel } from './models/testimonial.model';
export { InterestModel } from './models/interest.model';
export { ExtracurricularModel } from './models/extracurricular.model';
export { AffiliationModel } from './models/affiliation.model';

// shared pipes
import { DerpPipe } from './pipes/derp.pipe';
import { NoLastPipe } from './pipes/no-last.pipe';
import { LastPipe } from './pipes/last.pipe';

const DIRECTIVES = [
  ContactsComponent,
  CurriculumComponent,
  DurationComponent,
  HeaderComponent,
  HighlightsComponent,
  KeywordsComponent,
  SummaryComponent
];

const PIPES = [
  DerpPipe,
  NoLastPipe,
  LastPipe
];

export const SHARED_DIRECTIVES = DIRECTIVES;
export const SHARED_PIPES = PIPES;
export const SHARED_DECLARATIONS = [
  ...SHARED_DIRECTIVES,
  ...SHARED_PIPES
];
