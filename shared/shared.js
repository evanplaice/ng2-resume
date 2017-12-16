// shared directives
import { ContactsComponent } from 'ng2-resume/shared/components/contacts';
import { CurriculumComponent } from 'ng2-resume/shared/components/curriculum';
import { DurationComponent } from 'ng2-resume/shared/components/duration';
import { HeaderComponent } from 'ng2-resume/shared/components/header';
import { HighlightsComponent } from 'ng2-resume/shared/components/highlights';
import { KeywordsComponent } from 'ng2-resume/shared/components/keywords';
import { SummaryComponent } from 'ng2-resume/shared/components/summary';

// shared models
import { InfoModel } from 'ng2-resume/shared/models/info';
import { MetaModel } from 'ng2-resume/shared/models/meta';
import { DispositionModel } from 'ng2-resume/shared/models/disposition';
import { ContactModel } from 'ng2-resume/shared/models/contact';
import { LocationModel } from 'ng2-resume/shared/models/location';
import { EmploymentModel } from 'ng2-resume/shared/models/employment';
import { ProjectModel } from 'ng2-resume/shared/models/project';
import { SkillsModel } from 'ng2-resume/shared/models/skills';
import { ServiceModel } from 'ng2-resume/shared/models/service';
import { EducationModel } from 'ng2-resume/shared/models/education';
import { SocialModel } from 'ng2-resume/shared/models/social';
import { RecognitionModel } from 'ng2-resume/shared/models/recognition';
import { WritingModel } from 'ng2-resume/shared/models/writing';
import { ReadingModel } from 'ng2-resume/shared/models/reading';
import { SpeakingModel } from 'ng2-resume/shared/models/speaking';
import { GovernanceModel } from 'ng2-resume/shared/models/governance';
import { LanguagesModel } from 'ng2-resume/shared/models/language';
import { SampleModel } from 'ng2-resume/shared/models/sample';
import { ReferenceModel } from 'ng2-resume/shared/models/reference';
import { TestimonialModel } from 'ng2-resume/shared/models/testimonial';
import { InterestModel } from 'ng2-resume/shared/models/interest';
import { ExtracurricularModel } from 'ng2-resume/shared/models/extracurricular';
import { AffiliationModel } from 'ng2-resume/shared/models/affiliation';

// shared pipes
import { DerpPipe } from 'ng2-resume/shared/pipes/derp';
import { NoLastPipe } from 'ng2-resume/shared/pipes/no-last';
import { LastPipe } from 'ng2-resume/shared/pipes/last';

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