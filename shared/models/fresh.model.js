import {
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
  LanguageModel,
  SampleModel,
  ReferenceModel,
  TestimonialModel,
  InterestModel,
  ExtracurricularModel,
  AffiliationModel
} from 'ng2-resume/shared/shared.facade'

export class FreshModel {
  name = '';
  meta = {};
  info = {};
  disposition = {};
  contact = {};
  location = {};
  employment = {};
  projects = [];
  skills = {};
  service = {};
  education = {};
  social = [];
  recognition = [];
  writing = [];
  reading = [];
  speaking = [];
  governance = [];
  languages = [];
  samples = [];
  references = [];
  testimonials = [];
  interests = [];
  extracurricular = [];
  affiliation = {};

  constructor (obj) {
    // initialize with data
    if (obj) {
      this.init(obj);
      // console.log(this);
    }
  }

  init (obj) {
    if (obj.name) {
      this.name = obj.name;
    }

    if (obj.meta) {
      this.meta = new MetaModel(obj.meta);
    }

    if (obj.info) {
      this.info = new InfoModel(obj.info);
    }

    if (obj.disposition) {
      this.disposition = new DispositionModel(obj.disposition);
    }

    if (obj.contact) {
      this.contact = new ContactModel(obj.contact);
    }

    if (obj.location) {
      this.location = new LocationModel(obj.location);
    }

    if (obj.employment) {
      this.employment = new EmploymentModel(obj.employment);
    }

    if (obj.projects) {
      obj.projects.forEach((project) => {
        this.projects.push(new ProjectModel(project));
      });
    }

    if (obj.skills) {
      this.skills = new SkillsModel(obj.skills);
    }

    if (obj.service) {
      this.service = new ServiceModel(obj.service);
    }

    if (obj.education) {
      this.education = new EducationModel(obj.education);
    }

    if (obj.social) {
      obj.social.forEach((profile) => {
        this.social.push(new SocialModel(profile));
      });
    }

    if (obj.recognition) {
      obj.recognition.forEach((award) => {
        this.recognition.push(new RecognitionModel(award));
      });
    }

    if (obj.writing) {
      obj.writing.forEach((piece) => {
        this.writing.push(new WritingModel(piece));
      });
    }

    if (obj.reading) {
      obj.reading.forEach((piece) => {
        this.reading.push(new ReadingModel(piece));
      });
    }

    if (obj.speaking) {
      obj.speaking.forEach((talk) => {
        this.speaking.push(new SpeakingModel(talk));
      });
    }

    if (obj.governance) {
      obj.governance.forEach((position) => {
        this.governance.push(new GovernanceModel(position));
      });
    }

    if (obj.languages) {
      obj.languages.forEach((language) => {
        this.languages.push(new LanguageModel(language));
      });
    }

    if (obj.samples) {
      obj.samples.forEach((sample) => {
        this.samples.push(new SampleModel(sample));
      });
    }

    if (obj.references) {
      obj.references.forEach((reference) => {
        this.references.push(new ReferenceModel(reference));
      });
    }

    if (obj.testimonials) {
      obj.testimonials.forEach((testimonial) => {
        this.testimonials.push(new TestimonialModel(testimonial));
      });
    }

    if (obj.interests) {
      obj.interests.forEach((interest) => {
        this.interests.push(new InterestModel(interest));
      });
    }

    if (obj.extracurricular) {
      obj.extracurricular.forEach((activity) => {
        this.extracurricular.push(new ExtracurricularModel(activity));
      });
    }

    if (obj.affiliation) {
      this.affiliation = new AffiliationModel(obj.affiliation);
    }
  }
}
