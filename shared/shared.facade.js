// shared directives
import { ContactsComponent } from 'ng2-resume/shared/components/contacts.component';
import { CurriculumComponent } from 'ng2-resume/shared/components/curriculum.component';
import { DurationComponent } from 'ng2-resume/shared/components/duration.component';
import { HeaderComponent } from 'ng2-resume/shared/components/header.component';
import { HighlightsComponent } from 'ng2-resume/shared/components/highlights.component';
import { KeywordsComponent } from 'ng2-resume/shared/components/keywords.component';
import { SummaryComponent } from 'ng2-resume/shared/components/summary.component';

// shared models
export { InfoModel } from 'ng2-resume/shared/models/info.model';
export { MetaModel } from 'ng2-resume/shared/models/meta.model';
export { DispositionModel } from 'ng2-resume/shared/models/disposition.model';
export { ContactModel } from 'ng2-resume/shared/models/contact.model';
export { LocationModel } from 'ng2-resume/shared/models/location.model';
export { EmploymentModel } from 'ng2-resume/shared/models/employment.model';
export { ProjectModel } from 'ng2-resume/shared/models/project.model';
export { SkillsModel } from 'ng2-resume/shared/models/skills.model';
export { ServiceModel } from 'ng2-resume/shared/models/service.model';
export { EducationModel } from 'ng2-resume/shared/models/education.model';
export { SocialModel } from 'ng2-resume/shared/models/social.model';
export { RecognitionModel } from 'ng2-resume/shared/models/recognition.model';
export { WritingModel } from 'ng2-resume/shared/models/writing.model';
export { ReadingModel } from 'ng2-resume/shared/models/reading.model';
export { SpeakingModel } from 'ng2-resume/shared/models/speaking.model';
export { GovernanceModel } from 'ng2-resume/shared/models/governance.model';
export { LanguagesModel } from 'ng2-resume/shared/models/language.model';
export { SampleModel } from 'ng2-resume/shared/models/sample.model';
export { ReferenceModel } from 'ng2-resume/shared/models/reference.model';
export { TestimonialModel } from 'ng2-resume/shared/models/testimonial.model';
export { InterestModel } from 'ng2-resume/shared/models/interest.model';
export { ExtracurricularModel } from 'ng2-resume/shared/models/extracurricular.model';
export { AffiliationModel } from 'ng2-resume/shared/models/affiliation.model';

// shared pipes
import { DerpPipe } from 'ng2-resume/shared/pipes/derp.pipe';
import { NoLastPipe } from 'ng2-resume/shared/pipes/no-last.pipe';
import { LastPipe } from 'ng2-resume/shared/pipes/last.pipe';

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

export const TEMPLATE_DIRECTIVES = DIRECTIVES;
export const TEMPLATE_PIPES = PIPES;
export const SHARED_DECLARATIONS = [
  ...TEMPLATE_DIRECTIVES,
  ...TEMPLATE_PIPES
];