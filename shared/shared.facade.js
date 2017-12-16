// shared directives
import { ContactsComponent } from 'ng2-resume/shared/components/contacts.component';
import { CurriculumComponent } from 'ng2-resume/shared/components/curriculum.component';
import { DurationComponent } from 'ng2-resume/shared/components/duration.component';
import { HeaderComponent } from 'ng2-resume/shared/components/header.component';
import { HighlightsComponent } from 'ng2-resume/shared/components/highlights.component';
import { KeywordsComponent } from 'ng2-resume/shared/components/keywords.component';
import { SummaryComponent } from 'ng2-resume/shared/components/summary.component';

// shared models
import { InfoModel } from 'ng2-resume/shared/models/info.model';
import { MetaModel } from 'ng2-resume/shared/models/meta.model';
import { DispositionModel } from 'ng2-resume/shared/models/disposition.model';
import { ContactModel } from 'ng2-resume/shared/models/contact.model';
import { LocationModel } from 'ng2-resume/shared/models/location.model';
import { EmploymentModel } from 'ng2-resume/shared/models/employment.model';
import { ProjectModel } from 'ng2-resume/shared/models/project.model';
import { SkillsModel } from 'ng2-resume/shared/models/skills.model';
import { ServiceModel } from 'ng2-resume/shared/models/service.model';
import { EducationModel } from 'ng2-resume/shared/models/education.model';
import { SocialModel } from 'ng2-resume/shared/models/social.model';
import { RecognitionModel } from 'ng2-resume/shared/models/recognition.model';
import { WritingModel } from 'ng2-resume/shared/models/writing.model';
import { ReadingModel } from 'ng2-resume/shared/models/reading.model';
import { SpeakingModel } from 'ng2-resume/shared/models/speaking.model';
import { GovernanceModel } from 'ng2-resume/shared/models/governance.model';
import { LanguagesModel } from 'ng2-resume/shared/models/language.model';
import { SampleModel } from 'ng2-resume/shared/models/sample.model';
import { ReferenceModel } from 'ng2-resume/shared/models/reference.model';
import { TestimonialModel } from 'ng2-resume/shared/models/testimonial.model';
import { InterestModel } from 'ng2-resume/shared/models/interest.model';
import { ExtracurricularModel } from 'ng2-resume/shared/models/extracurricular.model';
import { AffiliationModel } from 'ng2-resume/shared/models/affiliation.model';

// shared pipes
import { DerpPipe } from 'ng2-resume/shared/pipes/derp.pipe';
import { NoLastPipe } from 'ng2-resume/shared/pipes/no-last.pipe';
import { LastPipe } from 'ng2-resume/shared/pipes/last.pipe';

const MODELS = [
  InfoModel,
  MetaModel,
  DispositionModel,
  ContactModel,
  LocationModel,
  EmploymentModel,
  ProjectModel,
  SkillsModel,
  ServiceModel,
  EducationModel,
  SocialModel,
  RecognitionModel,
  WritingModel,
  ReadingModel,
  SpeakingModel,
  GovernanceModel,
  LanguagesModel,
  SampleModel,
  ReferenceModel,
  TestimonialModel,
  InterestModel,
  ExtracurricularModel,
  AffiliationModel
];

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

export const TEMPLATE_MODELS = MODELS;
export const TEMPLATE_DIRECTIVES = DIRECTIVES;
export const TEMPLATE_PIPES = PIPES;
export const SHARED_DECLARATIONS = [
  ...TEMPLATE_DIRECTIVES,
  ...TEMPLATE_PIPES
];