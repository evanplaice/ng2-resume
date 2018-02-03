(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/http"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/http"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("@angular/common"), require("@angular/http")) : factory(root["@angular/core"], root["@angular/common"], root["@angular/http"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResumeService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

var _http = __webpack_require__(5);

var _fresh = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResumeService = exports.ResumeService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
  function ResumeService(http) {
    _classCallCheck(this, ResumeService);

    this.resume$ = this.resume$;
    this.src = this.src;

    // http bindings for a GET request
    this.http = http;

    // pre-load the data
    this.resume$ = this.loadResume();
  }

  _createClass(ResumeService, [{
    key: 'loadResume',
    value: function loadResume(path) {
      if (path || this.src) {
        return this.resume$ = this.http.get(path || this.src).map(function (res) {
          return new _fresh.FreshModel(res.json());
        }).startWith(new _fresh.FreshModel());
      }
    }
  }]);

  return ResumeService;
}()) || _class);
(0, _core.Inject)(_http.Http)(ResumeService, null, 0);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHARED_DECLARATIONS = exports.SHARED_PIPES = exports.SHARED_DIRECTIVES = exports.AffiliationModel = exports.ExtracurricularModel = exports.InterestModel = exports.TestimonialModel = exports.ReferenceModel = exports.SampleModel = exports.LanguagesModel = exports.GovernanceModel = exports.SpeakingModel = exports.ReadingModel = exports.WritingModel = exports.RecognitionModel = exports.SocialModel = exports.EducationModel = exports.ServiceModel = exports.SkillsModel = exports.ProjectModel = exports.EmploymentModel = exports.LocationModel = exports.ContactModel = exports.DispositionModel = exports.MetaModel = exports.InfoModel = undefined;

var _info = __webpack_require__(7);

Object.defineProperty(exports, 'InfoModel', {
  enumerable: true,
  get: function get() {
    return _info.InfoModel;
  }
});

var _meta = __webpack_require__(8);

Object.defineProperty(exports, 'MetaModel', {
  enumerable: true,
  get: function get() {
    return _meta.MetaModel;
  }
});

var _disposition = __webpack_require__(9);

Object.defineProperty(exports, 'DispositionModel', {
  enumerable: true,
  get: function get() {
    return _disposition.DispositionModel;
  }
});

var _contact = __webpack_require__(10);

Object.defineProperty(exports, 'ContactModel', {
  enumerable: true,
  get: function get() {
    return _contact.ContactModel;
  }
});

var _location = __webpack_require__(11);

Object.defineProperty(exports, 'LocationModel', {
  enumerable: true,
  get: function get() {
    return _location.LocationModel;
  }
});

var _employment = __webpack_require__(12);

Object.defineProperty(exports, 'EmploymentModel', {
  enumerable: true,
  get: function get() {
    return _employment.EmploymentModel;
  }
});

var _project = __webpack_require__(13);

Object.defineProperty(exports, 'ProjectModel', {
  enumerable: true,
  get: function get() {
    return _project.ProjectModel;
  }
});

var _skills = __webpack_require__(14);

Object.defineProperty(exports, 'SkillsModel', {
  enumerable: true,
  get: function get() {
    return _skills.SkillsModel;
  }
});

var _service = __webpack_require__(15);

Object.defineProperty(exports, 'ServiceModel', {
  enumerable: true,
  get: function get() {
    return _service.ServiceModel;
  }
});

var _education = __webpack_require__(16);

Object.defineProperty(exports, 'EducationModel', {
  enumerable: true,
  get: function get() {
    return _education.EducationModel;
  }
});

var _social = __webpack_require__(17);

Object.defineProperty(exports, 'SocialModel', {
  enumerable: true,
  get: function get() {
    return _social.SocialModel;
  }
});

var _recognition = __webpack_require__(18);

Object.defineProperty(exports, 'RecognitionModel', {
  enumerable: true,
  get: function get() {
    return _recognition.RecognitionModel;
  }
});

var _writing = __webpack_require__(19);

Object.defineProperty(exports, 'WritingModel', {
  enumerable: true,
  get: function get() {
    return _writing.WritingModel;
  }
});

var _reading = __webpack_require__(20);

Object.defineProperty(exports, 'ReadingModel', {
  enumerable: true,
  get: function get() {
    return _reading.ReadingModel;
  }
});

var _speaking = __webpack_require__(21);

Object.defineProperty(exports, 'SpeakingModel', {
  enumerable: true,
  get: function get() {
    return _speaking.SpeakingModel;
  }
});

var _governance = __webpack_require__(22);

Object.defineProperty(exports, 'GovernanceModel', {
  enumerable: true,
  get: function get() {
    return _governance.GovernanceModel;
  }
});

var _language = __webpack_require__(23);

Object.defineProperty(exports, 'LanguagesModel', {
  enumerable: true,
  get: function get() {
    return _language.LanguagesModel;
  }
});

var _sample = __webpack_require__(24);

Object.defineProperty(exports, 'SampleModel', {
  enumerable: true,
  get: function get() {
    return _sample.SampleModel;
  }
});

var _reference = __webpack_require__(25);

Object.defineProperty(exports, 'ReferenceModel', {
  enumerable: true,
  get: function get() {
    return _reference.ReferenceModel;
  }
});

var _testimonial = __webpack_require__(26);

Object.defineProperty(exports, 'TestimonialModel', {
  enumerable: true,
  get: function get() {
    return _testimonial.TestimonialModel;
  }
});

var _interest = __webpack_require__(27);

Object.defineProperty(exports, 'InterestModel', {
  enumerable: true,
  get: function get() {
    return _interest.InterestModel;
  }
});

var _extracurricular = __webpack_require__(28);

Object.defineProperty(exports, 'ExtracurricularModel', {
  enumerable: true,
  get: function get() {
    return _extracurricular.ExtracurricularModel;
  }
});

var _affiliation = __webpack_require__(29);

Object.defineProperty(exports, 'AffiliationModel', {
  enumerable: true,
  get: function get() {
    return _affiliation.AffiliationModel;
  }
});

var _contacts = __webpack_require__(30);

var _curriculum = __webpack_require__(31);

var _duration = __webpack_require__(32);

var _header = __webpack_require__(33);

var _highlights = __webpack_require__(34);

var _keywords = __webpack_require__(35);

var _summary = __webpack_require__(36);

var _derp = __webpack_require__(37);

var _noLast = __webpack_require__(38);

var _last = __webpack_require__(39);

var DIRECTIVES = [_contacts.ContactsComponent, _curriculum.CurriculumComponent, _duration.DurationComponent, _header.HeaderComponent, _highlights.HighlightsComponent, _keywords.KeywordsComponent, _summary.SummaryComponent];

// shared pipes


var PIPES = [_derp.DerpPipe, _noLast.NoLastPipe, _last.LastPipe];

var SHARED_DIRECTIVES = exports.SHARED_DIRECTIVES = DIRECTIVES;
var SHARED_PIPES = exports.SHARED_PIPES = PIPES;
var SHARED_DECLARATIONS = exports.SHARED_DECLARATIONS = [].concat(SHARED_DIRECTIVES, SHARED_PIPES);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _about = __webpack_require__(40);

Object.defineProperty(exports, 'AboutComponent', {
  enumerable: true,
  get: function get() {
    return _about.AboutComponent;
  }
});

var _info = __webpack_require__(41);

Object.defineProperty(exports, 'InfoComponent', {
  enumerable: true,
  get: function get() {
    return _info.InfoComponent;
  }
});

var _employment = __webpack_require__(42);

Object.defineProperty(exports, 'EmploymentComponent', {
  enumerable: true,
  get: function get() {
    return _employment.EmploymentComponent;
  }
});

var _projects = __webpack_require__(43);

Object.defineProperty(exports, 'ProjectsComponent', {
  enumerable: true,
  get: function get() {
    return _projects.ProjectsComponent;
  }
});

var _skills = __webpack_require__(44);

Object.defineProperty(exports, 'SkillsComponent', {
  enumerable: true,
  get: function get() {
    return _skills.SkillsComponent;
  }
});

var _service = __webpack_require__(45);

Object.defineProperty(exports, 'ServiceComponent', {
  enumerable: true,
  get: function get() {
    return _service.ServiceComponent;
  }
});

var _education = __webpack_require__(46);

Object.defineProperty(exports, 'EducationComponent', {
  enumerable: true,
  get: function get() {
    return _education.EducationComponent;
  }
});

var _social = __webpack_require__(47);

Object.defineProperty(exports, 'SocialComponent', {
  enumerable: true,
  get: function get() {
    return _social.SocialComponent;
  }
});

var _recognition = __webpack_require__(48);

Object.defineProperty(exports, 'RecognitionComponent', {
  enumerable: true,
  get: function get() {
    return _recognition.RecognitionComponent;
  }
});

var _writing = __webpack_require__(49);

Object.defineProperty(exports, 'WritingComponent', {
  enumerable: true,
  get: function get() {
    return _writing.WritingComponent;
  }
});

var _reading = __webpack_require__(50);

Object.defineProperty(exports, 'ReadingComponent', {
  enumerable: true,
  get: function get() {
    return _reading.ReadingComponent;
  }
});

var _speaking = __webpack_require__(51);

Object.defineProperty(exports, 'SpeakingComponent', {
  enumerable: true,
  get: function get() {
    return _speaking.SpeakingComponent;
  }
});

var _governance = __webpack_require__(52);

Object.defineProperty(exports, 'GovernanceComponent', {
  enumerable: true,
  get: function get() {
    return _governance.GovernanceComponent;
  }
});

var _languages = __webpack_require__(53);

Object.defineProperty(exports, 'LanguagesComponent', {
  enumerable: true,
  get: function get() {
    return _languages.LanguagesComponent;
  }
});

var _samples = __webpack_require__(54);

Object.defineProperty(exports, 'SamplesComponent', {
  enumerable: true,
  get: function get() {
    return _samples.SamplesComponent;
  }
});

var _references = __webpack_require__(55);

Object.defineProperty(exports, 'ReferencesComponent', {
  enumerable: true,
  get: function get() {
    return _references.ReferencesComponent;
  }
});

var _testimonials = __webpack_require__(56);

Object.defineProperty(exports, 'TestimonialsComponent', {
  enumerable: true,
  get: function get() {
    return _testimonials.TestimonialsComponent;
  }
});

var _interests = __webpack_require__(57);

Object.defineProperty(exports, 'InterestsComponent', {
  enumerable: true,
  get: function get() {
    return _interests.InterestsComponent;
  }
});

var _extracurricular = __webpack_require__(58);

Object.defineProperty(exports, 'ExtracurricularComponent', {
  enumerable: true,
  get: function get() {
    return _extracurricular.ExtracurricularComponent;
  }
});

var _affiliations = __webpack_require__(59);

Object.defineProperty(exports, 'AffiliationsComponent', {
  enumerable: true,
  get: function get() {
    return _affiliations.AffiliationsComponent;
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FreshModel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shared = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FreshModel = exports.FreshModel = function () {
  function FreshModel(obj) {
    _classCallCheck(this, FreshModel);

    this.name = '';
    this.meta = {};
    this.info = {};
    this.disposition = {};
    this.contact = {};
    this.location = {};
    this.employment = {};
    this.projects = [];
    this.skills = {};
    this.service = {};
    this.education = {};
    this.social = [];
    this.recognition = [];
    this.writing = [];
    this.reading = [];
    this.speaking = [];
    this.governance = [];
    this.languages = [];
    this.samples = [];
    this.references = [];
    this.testimonials = [];
    this.interests = [];
    this.extracurricular = [];
    this.affiliation = {};

    // initialize with data
    if (obj) {
      this.init(obj);
      // console.log(this);
    }
  }

  _createClass(FreshModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.name) {
        this.name = obj.name;
      }

      if (obj.meta) {
        this.meta = new _shared.MetaModel(obj.meta);
      }

      if (obj.info) {
        this.info = new _shared.InfoModel(obj.info);
      }

      if (obj.disposition) {
        this.disposition = new _shared.DispositionModel(obj.disposition);
      }

      if (obj.contact) {
        this.contact = new _shared.ContactModel(obj.contact);
      }

      if (obj.location) {
        this.location = new _shared.LocationModel(obj.location);
      }

      if (obj.employment) {
        this.employment = new _shared.EmploymentModel(obj.employment);
      }

      if (obj.projects) {
        obj.projects.forEach(function (project) {
          _this.projects.push(new _shared.ProjectModel(project));
        });
      }

      if (obj.skills) {
        this.skills = new _shared.SkillsModel(obj.skills);
      }

      if (obj.service) {
        this.service = new _shared.ServiceModel(obj.service);
      }

      if (obj.education) {
        this.education = new _shared.EducationModel(obj.education);
      }

      if (obj.social) {
        obj.social.forEach(function (profile) {
          _this.social.push(new _shared.SocialModel(profile));
        });
      }

      if (obj.recognition) {
        obj.recognition.forEach(function (award) {
          _this.recognition.push(new _shared.RecognitionModel(award));
        });
      }

      if (obj.writing) {
        obj.writing.forEach(function (piece) {
          _this.writing.push(new _shared.WritingModel(piece));
        });
      }

      if (obj.reading) {
        obj.reading.forEach(function (piece) {
          _this.reading.push(new _shared.ReadingModel(piece));
        });
      }

      if (obj.speaking) {
        obj.speaking.forEach(function (talk) {
          _this.speaking.push(new _shared.SpeakingModel(talk));
        });
      }

      if (obj.governance) {
        obj.governance.forEach(function (position) {
          _this.governance.push(new _shared.GovernanceModel(position));
        });
      }

      if (obj.languages) {
        obj.languages.forEach(function (language) {
          _this.languages.push(new _shared.LanguageModel(language));
        });
      }

      if (obj.samples) {
        obj.samples.forEach(function (sample) {
          _this.samples.push(new _shared.SampleModel(sample));
        });
      }

      if (obj.references) {
        obj.references.forEach(function (reference) {
          _this.references.push(new _shared.ReferenceModel(reference));
        });
      }

      if (obj.testimonials) {
        obj.testimonials.forEach(function (testimonial) {
          _this.testimonials.push(new _shared.TestimonialModel(testimonial));
        });
      }

      if (obj.interests) {
        obj.interests.forEach(function (interest) {
          _this.interests.push(new _shared.InterestModel(interest));
        });
      }

      if (obj.extracurricular) {
        obj.extracurricular.forEach(function (activity) {
          _this.extracurricular.push(new _shared.ExtracurricularModel(activity));
        });
      }

      if (obj.affiliation) {
        this.affiliation = new _shared.AffiliationModel(obj.affiliation);
      }
    }
  }]);

  return FreshModel;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InfoModel = exports.InfoModel = function () {
  function InfoModel(obj) {
    _classCallCheck(this, InfoModel);

    this.label = '';
    this.class = '';
    this.image = '';
    this.brief = '';
    this.quote = '';

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(InfoModel, [{
    key: 'init',
    value: function init(obj) {
      if (obj.label) {
        this.label = obj.label;
      }

      if (obj.class) {
        this.class = obj.class;
      }

      if (obj.image) {
        this.image = obj.image;
      }

      if (obj.brief) {
        this.brief = obj.brief;
      }

      if (obj.quote) {
        this.quote = obj.quote;
      }
    }
  }]);

  return InfoModel;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MetaModel = exports.MetaModel = function () {
  function MetaModel(obj) {
    _classCallCheck(this, MetaModel);

    this.format = '';
    this.version = '';

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(MetaModel, [{
    key: 'init',
    value: function init(obj) {
      if (obj.format) {
        this.format = obj.format;
      }

      if (obj.version) {
        this.version = obj.version;
      }
    }
  }]);

  return MetaModel;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DispositionModel = exports.DispositionModel = function () {
  function DispositionModel(obj) {
    _classCallCheck(this, DispositionModel);

    this.travel = 0;
    this.authorization = '';
    this.commitment = [];
    this.remote = this.remote;
    this.relocation = {};

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(DispositionModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.travel) {
        this.travel = obj.travel;
      }

      if (obj.authorization) {
        this.authorization = obj.authorization;
      }

      if (obj.commitment) {
        obj.commitment.forEach(function (item) {
          _this.commitment.push(item);
        });
      }

      if (obj.remote !== undefined) {
        this.remote = obj.remote;
      }

      if (obj.relocation) {
        if (obj.relocation.willing) {
          this.relocation.willing = obj.relocation.willing;
        }

        if (obj.relocation.destinations) {
          this.relocation.destinations = [];
          obj.relocation.destinations.forEach(function (destination) {
            _this.relocation.destinations.push(destination);
          });
        }
      }
    }
  }]);

  return DispositionModel;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactModel = exports.ContactModel = function () {
  function ContactModel(obj) {
    _classCallCheck(this, ContactModel);

    this.email = '';
    this.phone = '';
    this.website = '';
    this.other = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(ContactModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.email) {
        this.email = obj.email;
      }

      if (obj.phone) {
        this.phone = obj.phone;
      }

      if (obj.website) {
        this.website = obj.website;
      }

      if (obj.other) {
        obj.other.forEach(function (contact) {
          _this.addOther(contact);
        });
      }
    }
  }, {
    key: 'addOther',
    value: function addOther(contact) {
      var tmp = {};

      if (contact.label) {
        tmp.label = contact.label;
      }

      if (contact.category) {
        tmp.category = contact.category;
      }

      if (contact.value) {
        tmp.value = contact.value;
      }

      this.other.push(tmp);
    }
  }]);

  return ContactModel;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocationModel = exports.LocationModel = function () {
  function LocationModel(obj) {
    _classCallCheck(this, LocationModel);

    this.address = '';
    this.code = '';
    this.city = '';
    this.region = '';
    this.country = '';

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(LocationModel, [{
    key: 'init',
    value: function init(obj) {
      if (obj.address) {
        this.address = obj.address;
      }

      if (obj.code) {
        this.code = obj.code;
      }

      if (obj.city) {
        this.city = obj.city;
      }

      if (obj.country) {
        this.country = obj.country;
      }

      if (obj.region) {
        this.region = obj.region;
      }
    }
  }]);

  return LocationModel;
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmploymentModel = exports.EmploymentModel = function () {
  function EmploymentModel(obj) {
    _classCallCheck(this, EmploymentModel);

    this.summary = '';
    this.history = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(EmploymentModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.history) {
        obj.history.forEach(function (job) {
          _this.addJob(job);
        });
      }
    }
  }, {
    key: 'addJob',
    value: function addJob(job) {
      var tmp = {};

      if (job.employer) {
        tmp.employer = job.employer;
      }

      if (job.position) {
        tmp.position = job.position;
      }

      if (job.url) {
        tmp.url = job.url;
      }

      if (job.start) {
        tmp.start = job.start;
      }

      if (job.end) {
        tmp.end = job.end;
      }

      if (job.summary) {
        tmp.summary = job.summary;
      }

      if (job.location) {
        tmp.location = job.location;
      }

      if (job.highlights) {
        tmp.highlights = [];

        job.highlights.forEach(function (highlight) {
          tmp.highlights.push(highlight);
        });
      }

      if (job.keywords) {
        tmp.keywords = [];

        job.keywords.forEach(function (keyword) {
          tmp.keywords.push(keyword);
        });
      }

      this.history.push(tmp);
    }
  }]);

  return EmploymentModel;
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProjectModel = exports.ProjectModel = function () {
  function ProjectModel(obj) {
    _classCallCheck(this, ProjectModel);

    this.title = '';
    this.category = '';
    this.description = '';
    this.summary = '';
    this.role = '';
    this.url = '';
    this.media = [];
    this.repo = '';
    this.start = '';
    this.end = '';
    this.location = '';
    this.highlights = [];
    this.keywords = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(ProjectModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.title) {
        this.title = obj.title;
      }

      if (obj.category) {
        this.category = obj.category;
      }

      if (obj.description) {
        this.description = obj.description;
      }

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.role) {
        this.role = obj.role;
      }

      if (obj.url) {
        this.url = obj.url;
      }

      if (obj.media) {
        obj.media.forEach(function (reference) {
          _this.addMedia(reference);
        });
      }

      if (obj.repo) {
        this.repo = obj.repo;
      }

      if (obj.start) {
        this.start = obj.start;
      }

      if (obj.end) {
        this.end = obj.end;
      }

      if (obj.location) {
        this.location = obj.location;
      }

      if (obj.highlights) {
        obj.highlights.forEach(function (highlight) {
          _this.highlights.push(highlight);
        });
      }

      if (obj.keywords) {
        obj.keywords.forEach(function (keyword) {
          _this.keywords.push(keyword);
        });
      }
    }
  }, {
    key: 'addMedia',
    value: function addMedia(reference) {
      var tmp = {};

      if (reference.category) {
        tmp.category = reference.category;
      }

      if (reference.name) {
        tmp.name = reference.name;
      }

      if (reference.url) {
        tmp.url = reference.url;
      }

      this.media.push(tmp);
    }
  }]);

  return ProjectModel;
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SkillsModel = exports.SkillsModel = function () {
  function SkillsModel(obj) {
    _classCallCheck(this, SkillsModel);

    this.sets = [];
    this.list = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(SkillsModel, [{
    key: "init",
    value: function init(obj) {
      var _this = this;

      if (obj.sets) {
        obj.sets.forEach(function (set) {
          _this.addSet(set);
        });
      }

      if (obj.list) {
        obj.list.forEach(function (skill) {
          _this.addSkill(skill);
        });
      }
    }
  }, {
    key: "addSet",
    value: function addSet(set) {
      var tmp = {};

      if (set.name) {
        tmp.name = set.name;
      }

      if (set.level) {
        tmp.level = set.level;
      }

      if (set.skills) {
        tmp.skills = [];

        set.skills.forEach(function (skill) {
          tmp.skills.push(skill);
        });
      }

      this.sets.push(tmp);
    }
  }, {
    key: "addSkill",
    value: function addSkill(skill) {
      var tmp = {};

      if (skill.name) {
        tmp.name = skill.name;
      }

      if (skill.level) {
        tmp.level = skill.level;
      }

      if (skill.summary) {
        tmp.summary = skill.summary;
      }

      if (skill.years) {
        tmp.years = skill.years;
      }

      this.list.push(tmp);
    }
  }]);

  return SkillsModel;
}();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceModel = exports.ServiceModel = function () {
  function ServiceModel(obj) {
    _classCallCheck(this, ServiceModel);

    this.summary = '';
    this.history = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(ServiceModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.history) {
        obj.history.forEach(function (role) {
          _this.addRole(role);
        });
      }
    }
  }, {
    key: 'addRole',
    value: function addRole(role) {
      var tmp = {};

      if (role.category) {
        tmp.category = role.category;
      }

      if (role.organization) {
        tmp.organization = role.organization;
      }

      if (role.position) {
        tmp.position = role.position;
      }

      if (role.url) {
        tmp.url = role.url;
      }

      if (role.start) {
        tmp.start = role.start;
      }

      if (role.end) {
        tmp.end = role.end;
      }

      if (role.summary) {
        tmp.summary = role.summary;
      }

      if (role.location) {
        tmp.location = role.location;
      }

      if (role.highlights) {
        tmp.highlights = [];

        role.highlights.forEach(function (highlight) {
          tmp.highlights.push(highlight);
        });
      }

      if (role.keywords) {
        tmp.keywords = [];

        role.keywords.forEach(function (keyword) {
          tmp.keywords.push(keyword);
        });
      }

      this.history.push(tmp);
    }
  }]);

  return ServiceModel;
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EducationModel = exports.EducationModel = function () {
  function EducationModel(obj) {
    _classCallCheck(this, EducationModel);

    this.summary = '';
    this.level = '';
    this.degree = '';
    this.history = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(EducationModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.level) {
        this.level = obj.level;
      }

      if (obj.degree) {
        this.degree = obj.degree;
      }

      if (obj.history) {
        obj.history.forEach(function (school) {
          _this.addSchool(school);
        });
      }
    }
  }, {
    key: 'addSchool',
    value: function addSchool(school) {
      var tmp = {};

      if (school.title) {
        tmp.title = school.title;
      }

      if (school.institution) {
        tmp.institution = school.institution;
      }

      if (school.area) {
        tmp.area = school.area;
      }

      if (school.studyType) {
        tmp.studyType = school.studyType;
      }

      if (school.start) {
        tmp.start = school.start;
      }

      if (school.end) {
        tmp.end = school.end;
      }

      if (school.grade) {
        tmp.grade = school.grade;
      }

      if (school.curriculum) {
        tmp.curriculum = [];
        school.curriculum.forEach(function (subject) {
          tmp.curriculum.push(subject);
        });
      }

      if (school.url) {
        tmp.url = school.url;
      }

      if (school.summary) {
        tmp.summary = school.summary;
      }

      if (school.location) {
        tmp.location = school.location;
      }

      if (school.highlights) {
        tmp.highlights = [];

        school.highlights.forEach(function (highlight) {
          tmp.highlights.push(highlight);
        });
      }

      if (school.keywords) {
        tmp.keywords = [];

        school.keywords.forEach(function (keyword) {
          tmp.keywords.push(keyword);
        });
      }

      this.history.push(tmp);
    }
  }]);

  return EducationModel;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocialModel = exports.SocialModel = function () {
  function SocialModel(obj) {
    _classCallCheck(this, SocialModel);

    this.network = '';
    this.user = '';
    this.url = '';
    this.label = '';

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(SocialModel, [{
    key: 'init',
    value: function init(obj) {

      if (obj.network) {
        this.network = obj.network;
      }

      if (obj.user) {
        this.user = obj.user;
      }

      if (obj.url) {
        this.url = obj.url;
      }

      if (obj.label) {
        this.label = obj.label;
      }
    }
  }]);

  return SocialModel;
}();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecognitionModel = exports.RecognitionModel = function () {
  function RecognitionModel(obj) {
    _classCallCheck(this, RecognitionModel);

    this.category = '';
    this.title = '';
    this.date = '';
    this.from = '';
    this.summary = '';
    this.url = '';

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(RecognitionModel, [{
    key: 'init',
    value: function init(obj) {
      if (obj.category) {
        this.category = obj.category;
      }

      if (obj.title) {
        this.title = obj.title;
      }

      if (obj.date) {
        this.date = obj.date;
      }

      if (obj.from) {
        this.from = obj.from;
      }

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.url) {
        this.url = obj.url;
      }
    }
  }]);

  return RecognitionModel;
}();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WritingModel = exports.WritingModel = function () {
  function WritingModel(obj) {
    _classCallCheck(this, WritingModel);

    this.title = '';
    this.category = '';
    this.publisher = {};
    this.date = '';
    this.url = '';
    this.summary = '';

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(WritingModel, [{
    key: 'init',
    value: function init(obj) {
      if (obj.title) {
        this.title = obj.title;
      }

      if (obj.category) {
        this.category = obj.category;
      }

      if (obj.publisher) {
        if (obj.publisher.name) {
          this.publisher.name = obj.publisher.name;
        }

        if (obj.publisher.url) {
          this.publisher.url = obj.publisher.url;
        }
      }

      if (obj.date) {
        this.date = obj.date;
      }

      if (obj.url) {
        this.url = obj.url;
      }

      if (obj.summary) {
        this.summary = obj.summary;
      }
    }
  }]);

  return WritingModel;
}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReadingModel = exports.ReadingModel = function () {
  function ReadingModel(obj) {
    _classCallCheck(this, ReadingModel);

    this.title = '';
    this.category = '';
    this.url = '';
    this.author = '';
    this.date = '';
    this.summary = '';

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(ReadingModel, [{
    key: 'init',
    value: function init(obj) {
      if (obj.title) {
        this.title = obj.title;
      }

      if (obj.category) {
        this.category = obj.category;
      }

      if (obj.url) {
        this.url = obj.url;
      }

      if (obj.author) {
        this.author = obj.author;
      }

      if (obj.date) {
        this.date = obj.date;
      }

      if (obj.summary) {
        this.summary = obj.summary;
      }
    }
  }]);

  return ReadingModel;
}();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpeakingModel = exports.SpeakingModel = function () {
  function SpeakingModel(obj) {
    _classCallCheck(this, SpeakingModel);

    this.title = '';
    this.event = '';
    this.location = '';
    this.date = '';
    this.summary = '';
    this.highlights = [];
    this.keywords = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(SpeakingModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.title) {
        this.title = obj.title;
      }

      if (obj.event) {
        this.event = obj.event;
      }

      if (obj.location) {
        this.location = obj.location;
      }

      if (obj.date) {
        this.date = obj.date;
      }

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.highlights) {
        obj.highlights.forEach(function (highlight) {
          _this.highlights.push(highlight);
        });
      }

      if (obj.keywords) {
        obj.keywords.forEach(function (keyword) {
          _this.keywords.push(keyword);
        });
      }
    }
  }]);

  return SpeakingModel;
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GovernanceModel = exports.GovernanceModel = function () {
  function GovernanceModel(obj) {
    _classCallCheck(this, GovernanceModel);

    this.summary = '';
    this.category = '';
    this.role = '';
    this.organization = '';
    this.start = '';
    this.end = '';
    this.highlights = [];
    this.keywords = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(GovernanceModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.category) {
        this.category = obj.category;
      }

      if (obj.role) {
        this.role = obj.role;
      }

      if (obj.organization) {
        this.organization = obj.organization;
      }

      if (obj.start) {
        this.start = obj.start;
      }

      if (obj.end) {
        this.end = obj.end;
      }

      if (obj.highlights) {
        obj.highlights.forEach(function (highlight) {
          _this.highlights.push(highlight);
        });
      }

      if (obj.keywords) {
        obj.keywords.forEach(function (keyword) {
          _this.keywords.push(keyword);
        });
      }
    }
  }]);

  return GovernanceModel;
}();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LanguageModel = exports.LanguageModel = function () {
  function LanguageModel(obj) {
    _classCallCheck(this, LanguageModel);

    this.language = '';
    this.level = '';
    this.years = '';

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(LanguageModel, [{
    key: 'init',
    value: function init(obj) {
      if (obj.language) {
        this.language = obj.language;
      }

      if (obj.level) {
        this.level = obj.level;
      }

      if (obj.years) {
        this.years = obj.years;
      }
    }
  }]);

  return LanguageModel;
}();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SampleModel = exports.SampleModel = function () {
  function SampleModel(obj) {
    _classCallCheck(this, SampleModel);

    this.title = '';
    this.summary = '';
    this.url = '';
    this.date = '';
    this.highlights = [];
    this.keywords = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(SampleModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.title) {
        this.title = obj.title;
      }

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.url) {
        this.url = obj.url;
      }

      if (obj.date) {
        this.date = obj.date;
      }

      if (obj.highlights) {
        obj.highlights.forEach(function (highlight) {
          _this.highlights.push(highlight);
        });
      }

      if (obj.keywords) {
        obj.keywords.forEach(function (keyword) {
          _this.keywords.push(keyword);
        });
      }
    }
  }]);

  return SampleModel;
}();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReferenceModel = exports.ReferenceModel = function () {
  function ReferenceModel(obj) {
    _classCallCheck(this, ReferenceModel);

    this.name = '';
    this.role = '';
    this.category = '';
    this.private = this.private;
    this.summary = '';
    this.contact = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(ReferenceModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.name) {
        this.name = obj.name;
      }

      if (obj.role) {
        this.role = obj.role;
      }

      if (obj.category) {
        this.category = obj.category;
      }

      if (obj.private !== undefined) {
        this.private = obj.private;
      }

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.contact) {
        obj.contact.forEach(function (contact) {
          _this.addContact(contact);
        });
      }
    }
  }, {
    key: 'addContact',
    value: function addContact(contact) {
      var tmp = {};

      if (contact.label) {
        tmp.label = contact.label;
      }

      if (contact.category) {
        tmp.category = contact.category;
      }

      if (contact.value) {
        tmp.value = contact.value;
      }

      this.contact.push(tmp);
    }
  }]);

  return ReferenceModel;
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestimonialModel = exports.TestimonialModel = function () {
  function TestimonialModel(obj) {
    _classCallCheck(this, TestimonialModel);

    this.name = '';
    this.quote = '';
    this.category = '';
    this.private = this.private;

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(TestimonialModel, [{
    key: 'init',
    value: function init(obj) {
      if (obj.name) {
        this.name = obj.name;
      }

      if (obj.quote) {
        this.quote = obj.quote;
      }

      if (obj.category) {
        this.category = obj.category;
      }

      if (obj.private !== undefined) {
        this.private = obj.private;
      }
    }
  }]);

  return TestimonialModel;
}();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InterestModel = exports.InterestModel = function () {
  function InterestModel(obj) {
    _classCallCheck(this, InterestModel);

    this.name = '';
    this.summary = '';
    this.keywords = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(InterestModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.name) {
        this.name = obj.name;
      }

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.keywords) {
        obj.keywords.forEach(function (keyword) {
          _this.keywords.push(keyword);
        });
      }
    }
  }]);

  return InterestModel;
}();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExtracurricularModel = exports.ExtracurricularModel = function () {
  function ExtracurricularModel(obj) {
    _classCallCheck(this, ExtracurricularModel);

    this.title = '';
    this.activity = '';
    this.location = '';
    this.start = '';
    this.end = '';

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(ExtracurricularModel, [{
    key: 'init',
    value: function init(obj) {
      if (obj.title) {
        this.title = obj.title;
      }

      if (obj.activity) {
        this.activity = obj.activity;
      }

      if (obj.location) {
        this.location = obj.location;
      }

      if (obj.start) {
        this.start = obj.start;
      }

      if (obj.end) {
        this.end = obj.end;
      }
    }
  }]);

  return ExtracurricularModel;
}();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AffiliationModel = exports.AffiliationModel = function () {
  function AffiliationModel(obj) {
    _classCallCheck(this, AffiliationModel);

    this.summary = '';
    this.history = [];

    if (obj) {
      this.init(obj);
    }
  }

  _createClass(AffiliationModel, [{
    key: 'init',
    value: function init(obj) {
      var _this = this;

      if (obj.summary) {
        this.summary = obj.summary;
      }

      if (obj.history) {
        obj.history.forEach(function (association) {
          _this.addAssociation(association);
        });
      }
    }
  }, {
    key: 'addAssociation',
    value: function addAssociation(assoc) {
      var tmp = {};

      if (assoc.category) {
        tmp.category = assoc.category;
      }

      if (assoc.organization) {
        tmp.organization = assoc.organization;
      }

      if (assoc.role) {
        tmp.role = assoc.role;
      }

      if (assoc.url) {
        tmp.url = assoc.url;
      }

      if (assoc.start) {
        tmp.start = assoc.start;
      }

      if (assoc.end) {
        tmp.end = assoc.end;
      }

      if (assoc.summary) {
        tmp.summary = assoc.summary;
      }

      if (assoc.location) {
        tmp.location = assoc.location;
      }

      if (assoc.highlights) {
        tmp.highlights = [];

        assoc.highlights.forEach(function (highlight) {
          tmp.highlights.push(highlight);
        });
      }

      if (assoc.keywords) {
        tmp.keywords = [];

        assoc.keywords.forEach(function (keyword) {
          tmp.keywords.push(keyword);
        });
      }

      this.history.push(tmp);
    }
  }]);

  return AffiliationModel;
}();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactsComponent = undefined;

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactsComponent = exports.ContactsComponent = (_dec = (0, _core.Component)({
  selector: 'contacts',
  inputs: ['contacts'],
  template: '\n  <ng-template [ngIf]="contacts">\n    <ul *ngFor="let contact of contacts">\n      <li>{{ contact.category }} - {{ contact.value }}</li>\n    </ul>\n  </ng-template>\n  '
}), _dec(_class = function ContactsComponent() {
  _classCallCheck(this, ContactsComponent);
}) || _class);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurriculumComponent = undefined;

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CurriculumComponent = exports.CurriculumComponent = (_dec = (0, _core.Component)({
  selector: 'curriculum',
  inputs: ['curriculum'],
  template: '\n  <ul *ngIf="curriculum">\n    <li *ngFor="let subject of curriculum" class="keywords">{{ subject }}</li>\n  </ul>\n  '
}), _dec(_class = function CurriculumComponent() {
  _classCallCheck(this, CurriculumComponent);
}) || _class);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DurationComponent = undefined;

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DurationComponent = exports.DurationComponent = (_dec = (0, _core.Component)({
  selector: 'duration',
  inputs: ['start', 'end'],
  template: '\n  <ng-template [ngIf]="start">\n  <span *ngIf="start && !end" class="tenure">{{ start }}</span>\n  <span *ngIf="start && end" class="tenure">{{ start }} - {{ end }}</span>\n  </ng-template>\n  '
}), _dec(_class = function DurationComponent() {
  _classCallCheck(this, DurationComponent);
}) || _class);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderComponent = undefined;

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderComponent = exports.HeaderComponent = (_dec = (0, _core.Component)({
  selector: 'header',
  inputs: ['title'],
  template: '\n    <ng-content></ng-content>\n    <ng-template [ngIf]="title"><h2>{{ title }}</h2></ng-template>\n  '
}), _dec(_class = function HeaderComponent() {
  _classCallCheck(this, HeaderComponent);
}) || _class);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlightsComponent = undefined;

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HighlightsComponent = exports.HighlightsComponent = (_dec = (0, _core.Component)({
  selector: 'highlights',
  inputs: ['highlights'],
  template: '\n  <ul *ngIf="highlights">\n    <li *ngFor="let highlight of highlights">{{ highlight }}</li>\n  </ul>\n  '
}), _dec(_class = function HighlightsComponent() {
  _classCallCheck(this, HighlightsComponent);
}) || _class);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeywordsComponent = undefined;

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeywordsComponent = exports.KeywordsComponent = (_dec = (0, _core.Component)({
  selector: 'keywords',
  inputs: ['keywords'],
  template: '\n  <ng-template [ngIf]="keywords">\n  <span class="keywords" *ngFor="let keyword of keywords">{{ keyword }} </span>\n  </ng-template>\n  '
}), _dec(_class = function KeywordsComponent() {
  _classCallCheck(this, KeywordsComponent);
}) || _class);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SummaryComponent = undefined;

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SummaryComponent = exports.SummaryComponent = (_dec = (0, _core.Component)({
  selector: 'summary',
  inputs: ['summary'],
  template: '\n  <ng-template [ngIf]="summary">\n  <p>{{ summary }}}</p>\n  </ng-template>\n  '
}), _dec(_class = function SummaryComponent() {
  _classCallCheck(this, SummaryComponent);
}) || _class);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DerpPipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  # Description:

  Repackages an array subset as a new array.

  **Reasoning:**

  Angular2's change checker freaks out when you ngFor an array that's a subset
    of a larger data structure.

  # Usage:
  ```
  <div *ng-for="#value of arrayOfObjects | derp"> </div>
  ```
*/
var DerpPipe = exports.DerpPipe = (_dec = (0, _core.Pipe)({ name: 'derp' }), _dec(_class = function () {
  function DerpPipe() {
    _classCallCheck(this, DerpPipe);
  }

  _createClass(DerpPipe, [{
    key: 'transform',
    value: function transform(value, args) {
      return Array.from(value);
    }
  }]);

  return DerpPipe;
}()) || _class);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoLastPipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  # Description:

  Truncates the last word

  # Usage:
  ```
  <span>{{ resume.name | nolast }}</div>
  ```
*/
var NoLastPipe = exports.NoLastPipe = (_dec = (0, _core.Pipe)({ name: 'nolast' }), _dec(_class = function () {
  function NoLastPipe() {
    _classCallCheck(this, NoLastPipe);
  }

  _createClass(NoLastPipe, [{
    key: 'transform',
    value: function transform(value, args) {
      if (value) {
        value = value.split(' ');
        return value.splice(0, value.length - 1).join(' ');
      }
    }
  }]);

  return NoLastPipe;
}()) || _class);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LastPipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  # Description:

  Returns the last word

  # Usage:
  ```
  <span>{{ resume.name | last }}</div>
  ```
*/
var LastPipe = exports.LastPipe = (_dec = (0, _core.Pipe)({ name: 'last' }), _dec(_class = function () {
  function LastPipe() {
    _classCallCheck(this, LastPipe);
  }

  _createClass(LastPipe, [{
    key: 'transform',
    value: function transform(value, args) {
      if (value) {
        value = value.split(' ');
        return value.splice(value.length - 1, 1);
      }
    }
  }]);

  return LastPipe;
}()) || _class);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutComponent = undefined;

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AboutComponent = exports.AboutComponent = (_dec = (0, _core.Component)({
  selector: 'about',
  inputs: ['name', 'contact', 'social'],
  template: '\n  <header style="float:left">\n    <h1 *ngIf="name">{{ name }}</h1>\n    <div id="contact">\n      <div *ngIf="contact.email" class="email"><a href="mailto:{{ contact.email }}">{{ contact.email }}</a></div>\n      <div *ngIf="contact.phone" class="phone">{{ contact.phone }}</div>\n      <div *ngIf="contact.website" class="website"><a href="{{ contact.website }}">{{ contact.website }}</a></div>\n    </div>\n  </header>\n  <div id="social" style="float:right;">\n    <div *ngFor="let profile of social | derp">{{ profile.network }}: <a href="{{ profile.url }}">{{ profile.user }}</a></div>\n  </div>\n  <div style="clear:both;"></div>\n  '
}), _dec(_class = function AboutComponent() {
  _classCallCheck(this, AboutComponent);
}) || _class);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InfoComponent = exports.InfoComponent = (_dec = (0, _core.Component)({
  selector: 'info',
  inputs: ['info'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="info">\n    <header title="Info"><span class="fa fa-lg fa-info"></span></header>\n    {{ info.brief }}\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function InfoComponent() {
    _classCallCheck(this, InfoComponent);
  }

  _createClass(InfoComponent, [{
    key: 'empty',
    value: function empty() {
      // has info
      return Object.keys(this.info).length === 0;
    }
  }]);

  return InfoComponent;
}()) || _class);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmploymentComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmploymentComponent = exports.EmploymentComponent = (_dec = (0, _core.Component)({
  selector: 'employment',
  inputs: ['employment'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="employment">\n    <header title="Employment"><span class="fa fa-lg fa-building"></span></header>\n    <div *ngFor="let job of employment.history">\n      <div>\n        <h3><em>{{ job.position }}</em>,\n          <ng-template [ngIf]="job.url"><a href="{{ job.url }}">{{ job.employer }}</a></ng-template>\n          <ng-template [ngIf]="!job.url">{{ job.employer }}</ng-template>\n        </h3>\n        <duration [start]="job.start" [end]="job.end"></duration>\n        <summary>{{ job.summary }}</summary>\n        <highlights [highlights]="job.highlights"></highlights>\n        <keywords [keywords]="job.keywords"></keywords>\n      </div>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function EmploymentComponent() {
    _classCallCheck(this, EmploymentComponent);
  }

  _createClass(EmploymentComponent, [{
    key: 'empty',
    value: function empty() {
      // has history
      if (this.employment.history && Object.keys(this.employment.history).length !== 0) {
        return false;
      }
      return true;
    }
  }]);

  return EmploymentComponent;
}()) || _class);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProjectsComponent = exports.ProjectsComponent = (_dec = (0, _core.Component)({
  selector: 'projects',
  inputs: ['projects'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="projects">\n    <header title="Projects"><span class="fa fa-lg fa-star"></span></header>\n    <div *ngFor="let project of projects">\n      <h3 *ngIf="project.role"><em>{{ project.role }}</em>,\n        <ng-template [ngIf]="project.url"><a href="{{ project.url }}">{{ project.title }}</a></ng-template>\n        <ng-template [ngIf]="!project.url">{{ project.title }}</ng-template>\n      </h3>\n      <duration [start]="project.start" [end]="project.end"></duration>\n      <summary>{{ project.summary }}</summary>\n      <highlights [highlights]="project.highlights"></highlights>\n      <keywords [keywords]="project.keywords"></keywords>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function ProjectsComponent() {
    _classCallCheck(this, ProjectsComponent);
  }

  _createClass(ProjectsComponent, [{
    key: 'empty',
    value: function empty() {
      // has projects
      return this.projects.length === 0;
    }
  }]);

  return ProjectsComponent;
}()) || _class);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SkillsComponent = exports.SkillsComponent = (_dec = (0, _core.Component)({
  selector: 'skills',
  inputs: ['skills'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="skills">\n    <header title="Skills"><span class="fa fa-lg fa-code"></span></header>\n    <table>\n      <thead>\n        <tr>\n          <th>Skills</th>\n          <th>Keywords</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor="let set of skills.sets">\n          <td style="width: 25%;">{{ set.name }}</td>\n          <td><keywords [keywords]="set.skills"></keywords></td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function SkillsComponent() {
    _classCallCheck(this, SkillsComponent);
  }

  _createClass(SkillsComponent, [{
    key: 'empty',
    value: function empty() {
      // has sets
      if (this.skills.sets && Object.keys(this.skills.sets).length !== 0) {
        return false;
      }
      // has skills
      if (this.skills.list && Object.keys(this.skills.list).length !== 0) {
        return false;
      }
      return true;
    }
  }]);

  return SkillsComponent;
}()) || _class);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceComponent = exports.ServiceComponent = (_dec = (0, _core.Component)({
  selector: 'service',
  inputs: ['service'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="service">\n    <header title="Service"><span class="fa fa-lg fa-child"></span></header>\n    <div *ngFor="let role of service.history">\n      <h3 *ngIf="role.organization"><em>{{ role.position }}</em>,\n        <ng-template [ngIf]="role.organization && !role.url">{{ role.organization }}</ng-template>\n        <ng-template [ngIf]="role.organization && role.url"><a href="{{ role.url }}">{{ role.organization }}</a></ng-template>\n      </h3>\n      <duration [start]="role.start" [end]="role.end"></duration>\n      <summary>{{ role.summary }}</summary>\n      <highlights [highlights]="role.highlights"></highlights>\n      <keywords [keywords]="role.keywords"></keywords>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function ServiceComponent() {
    _classCallCheck(this, ServiceComponent);
  }

  _createClass(ServiceComponent, [{
    key: 'empty',
    value: function empty() {
      // has history
      if (this.service.history && Object.keys(this.service.history).length !== 0) {
        return false;
      }
      return true;
    }
  }]);

  return ServiceComponent;
}()) || _class);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EducationComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EducationComponent = exports.EducationComponent = (_dec = (0, _core.Component)({
  selector: 'education',
  inputs: ['education'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="education">\n    <header title="Education"><span class="fa fa-lg fa-mortar-board"></span></header>\n    <div *ngFor="let school of education.history">\n      <h3>\n        <ng-template [ngIf]="school.title"><em>{{ school.title }}</em>, </ng-template>{{ school.institution }}\n      </h3>\n      <duration [start]="school.start" [end]="school.end"></duration>\n      <summary>{{ school.summary }}</summary>\n      <curriculum [curriculum]="school.curriculum"></curriculum>\n      <highlights [highlights]="school.highlights"></highlights>\n      <keywords [keywords]="school.keywords"></keywords>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function EducationComponent() {
    _classCallCheck(this, EducationComponent);
  }

  _createClass(EducationComponent, [{
    key: 'empty',
    value: function empty() {
      // has history
      if (this.education.history && Object.keys(this.education.history).length !== 0) {
        return false;
      }
      return true;
    }
  }]);

  return EducationComponent;
}()) || _class);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocialComponent = exports.SocialComponent = (_dec = (0, _core.Component)({
  selector: 'social',
  inputs: ['social'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="social">\n    <header title="Social"></header>\n    // TODO: implement this\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function SocialComponent() {
    _classCallCheck(this, SocialComponent);
  }

  _createClass(SocialComponent, [{
    key: 'empty',
    value: function empty() {
      // has social info
      return this.social.length === 0;
    }
  }]);

  return SocialComponent;
}()) || _class);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecognitionComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecognitionComponent = exports.RecognitionComponent = (_dec = (0, _core.Component)({
  selector: 'recognition',
  inputs: ['recognition'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="recognition">\n    <header title="Recognition"><span class="fa fa-lg fa-trophy"></span></header>\n    <div *ngFor="let award of recognition">\n      <h3>\n        <ng-template [ngIf]="!award.from">\n          <em>{{ award.title }}</em>\n        </ng-template>\n        <ng-template [ngIf]="award.from">\n          <em>{{ award.title }}, </em>\n          <ng-template [ngIf]="!award.url">{{ award.from }}</ng-template>\n          <ng-template [ngIf]="award.url"> <a href="{{ award.url }}">{{ award.from }}</a></ng-template>\n        </ng-template>\n      </h3>\n      <duration [start]="award.date"></duration>\n      <summary>{{ award.summary }}</summary>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function RecognitionComponent() {
    _classCallCheck(this, RecognitionComponent);
  }

  _createClass(RecognitionComponent, [{
    key: 'empty',
    value: function empty() {
      // has awards
      return this.recognition.length === 0;
    }
  }]);

  return RecognitionComponent;
}()) || _class);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WritingComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WritingComponent = exports.WritingComponent = (_dec = (0, _core.Component)({
  selector: 'writing',
  inputs: ['writing'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="writing">\n    <header title="Writing"><span class="fa fa-lg fa-pencil"></span></header>\n    <div *ngFor="let piece of writing">\n      <h3>\n        <ng-template [ngIf]="!piece.publisher.url"><em>{{ piece.title }}</em>, {{ piece.publisher.name }}</ng-template>\n        <ng-template [ngIf]="piece.publisher.url"><em>{{ piece.title }}</em>, <a href="{{ piece.publisher.url }}">{{ piece.publisher.name }}</a></ng-template>\n      </h3>\n      <duration [start]="piece.date"></duration>\n      <summary>{{ piece.summary }}</summary>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function WritingComponent() {
    _classCallCheck(this, WritingComponent);
  }

  _createClass(WritingComponent, [{
    key: 'empty',
    value: function empty() {
      // has pieces
      return this.writing.length === 0;
    }
  }]);

  return WritingComponent;
}()) || _class);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadingComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReadingComponent = exports.ReadingComponent = (_dec = (0, _core.Component)({
  selector: 'reading',
  inputs: ['reading'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="reading">\n    <header title="Reading"><span class="fa fa-lg fa-book"></span></header>\n    <div *ngFor="let piece of reading">\n      <h3>\n        <ng-template [ngIf]="!piece.url"><em>{{ piece.title }}</em><ng-template [ngIf]="piece.author">, {{ piece.author }}</ng-template></ng-template>\n        <ng-template [ngIf]="piece.url"><a href="{{ piece.url }}"><em>{{ piece.title }}</em></a><ng-template [ngIf]="piece.author">, {{ piece.author }}</ng-template></ng-template>\n      </h3>\n      <duration [start]="piece.date"></duration>\n      <summary>{{ piece.summary }}</summary>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function ReadingComponent() {
    _classCallCheck(this, ReadingComponent);
  }

  _createClass(ReadingComponent, [{
    key: 'empty',
    value: function empty() {
      // has pieces
      return this.reading.length === 0;
    }
  }]);

  return ReadingComponent;
}()) || _class);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpeakingComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpeakingComponent = exports.SpeakingComponent = (_dec = (0, _core.Component)({
  selector: 'speaking',
  inputs: ['speaking'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="speaking">\n    <header title="Speaking"><span class="fa fa-lg fa-users"></span></header>\n    <div *ngFor="let talk of speaking">\n      <h3>\n        <ng-template [ngIf]="talk.title"><em>{{ talk.title }}</em>, </ng-template>\n        {{ talk.event }}\n      </h3>\n      <duration [start]="talk.date"></duration>\n      <summary>{{ talk.summary }}</summary>\n      <highlights [highlights]="talk.highlights"></highlights>\n      <keywords [keywords]="talk.keywords"></keywords>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function SpeakingComponent() {
    _classCallCheck(this, SpeakingComponent);
  }

  _createClass(SpeakingComponent, [{
    key: 'empty',
    value: function empty() {
      // has talks
      return this.speaking.length === 0;
    }
  }]);

  return SpeakingComponent;
}()) || _class);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GovernanceComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GovernanceComponent = exports.GovernanceComponent = (_dec = (0, _core.Component)({
  selector: 'governance',
  inputs: ['governance'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="governance">\n    <header title="Governance"></header>\n    <div *ngFor="let position of governance">\n      <h3>\n        <ng-template [ngIf]="position.role">\n        <em>{{ position.role }}</em><ng-template [ngIf]="position.organization">, {{ position.organization }}</ng-template>\n        </ng-template>\n      </h3>\n    </div>\n    <!-- <duration [start]="position.start" [end]="position.end"></duration> -->\n    <!-- <highlights [highlights]="position.highlights"></highlights> -->\n    <!-- <keywords [keywords]="position.keywords"></keywords> -->\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function GovernanceComponent() {
    _classCallCheck(this, GovernanceComponent);
  }

  _createClass(GovernanceComponent, [{
    key: 'empty',
    value: function empty() {
      // has positions
      return this.governance.length === 0;
    }
  }]);

  return GovernanceComponent;
}()) || _class);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguagesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LanguagesComponent = exports.LanguagesComponent = (_dec = (0, _core.Component)({
  selector: 'languages',
  inputs: ['languages'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="languages">\n    <header title="Languages"></header>\n    // TODO: implement this\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function LanguagesComponent() {
    _classCallCheck(this, LanguagesComponent);
  }

  _createClass(LanguagesComponent, [{
    key: 'empty',
    value: function empty() {
      // has languages
      return this.languages.length === 0;
    }
  }]);

  return LanguagesComponent;
}()) || _class);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SamplesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SamplesComponent = exports.SamplesComponent = (_dec = (0, _core.Component)({
  selector: 'samples',
  inputs: ['samples'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="samples">\n    <header title="Samples"><span class="fa fa-lg fa-share"></span></header>\n    <div *ngFor="let sample of samples">\n      <h3 *ngIf="sample.title">\n        <ng-template [ngIf]="!sample.url">{{ role.title }}</ng-template>\n        <ng-template [ngIf]="sample.url"><a href="{{ sample.url }}">{{ sample.title }}</a></ng-template>\n      </h3>\n      <duration [start]="sample.date"></duration>\n      <summary>{{ sample.summary }}</summary>\n      <highlights [highlights]="sample.highlights"></highlights>\n      <keywords [keywords]="sample.keywords"></keywords>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function SamplesComponent() {
    _classCallCheck(this, SamplesComponent);
  }

  _createClass(SamplesComponent, [{
    key: 'empty',
    value: function empty() {
      // has samples
      return this.samples.length === 0;
    }
  }]);

  return SamplesComponent;
}()) || _class);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferencesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReferencesComponent = exports.ReferencesComponent = (_dec = (0, _core.Component)({
  selector: 'references',
  inputs: ['references'],
  template: '\n  <ng-template [ngIf]="!empty() && !references.private">\n  <hr>\n  <section id="references">\n    <header title="References"><span class="fa fa-lg fa-thumbs-o-up"></span></header>\n    <div *ngFor="let reference of references">\n      <h3>\n        <ng-template [ngIf]="!reference.role"><em>{{ reference.name }}</em></ng-template>\n        <ng-template [ngIf]="reference.role"><em>{{ reference.name }}</em>, {{ reference.role }}</ng-template>\n      </h3>\n      <contacts [contacts]="reference.contact"></contacts>\n      <summary>{{ reference.summary }}</summary>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function ReferencesComponent() {
    _classCallCheck(this, ReferencesComponent);
  }

  _createClass(ReferencesComponent, [{
    key: 'empty',
    value: function empty() {
      // has references
      return this.references.length === 0;
    }
  }]);

  return ReferencesComponent;
}()) || _class);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestimonialsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestimonialsComponent = exports.TestimonialsComponent = (_dec = (0, _core.Component)({
  selector: 'testimonials',
  inputs: ['testimonials'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="testimonials">\n    <header title="Testimonials"><span class="fa fa-lg fa-thumbs-o-up"></span></header>\n    <div *ngFor="let testimonial of testimonials">\n      <h3><em>{{ testimonial.name }}</em></h3>\n      <summary>{{ testimonial.quote }}</summary>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function TestimonialsComponent() {
    _classCallCheck(this, TestimonialsComponent);
  }

  _createClass(TestimonialsComponent, [{
    key: 'empty',
    value: function empty() {
      // has testimonials
      return this.testimonials.length === 0;
    }
  }]);

  return TestimonialsComponent;
}()) || _class);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterestsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InterestsComponent = exports.InterestsComponent = (_dec = (0, _core.Component)({
  selector: 'interests',
  inputs: ['interests'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="interests">\n    <header title="Interests"><span class="fa fa-lg fa-bicycle"></span></header>\n    <div *ngFor="let interest of interests">\n      <h3>\n        <em>{{ interest.name }}</em>\n      </h3>\n      <p *ngIf="interest.summary">{{ interest.summary }}</p>\n      <keywords [keywords]="interest.keywords"></keywords>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function InterestsComponent() {
    _classCallCheck(this, InterestsComponent);
  }

  _createClass(InterestsComponent, [{
    key: 'empty',
    value: function empty() {
      // has interests
      return this.interests.length === 0;
    }
  }]);

  return InterestsComponent;
}()) || _class);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtracurricularComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExtracurricularComponent = exports.ExtracurricularComponent = (_dec = (0, _core.Component)({
  selector: 'extracurricular',
  inputs: ['extracurricular'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="extracurricular">\n    <header title="Extracurricular"></header>\n    // TODO: implement this\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function ExtracurricularComponent() {
    _classCallCheck(this, ExtracurricularComponent);
  }

  _createClass(ExtracurricularComponent, [{
    key: 'empty',
    value: function empty() {
      // has activities
      return this.extracurricular.length === 0;
    }
  }]);

  return ExtracurricularComponent;
}()) || _class);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AffiliationsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AffiliationsComponent = exports.AffiliationsComponent = (_dec = (0, _core.Component)({
  selector: 'affiliations',
  inputs: ['affiliations'],
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="affiliations">\n    <header title="Affiliations"><span class="fa fa-lg fa-share-alt"></span></header>\n    <div *ngFor="let association of affiliations.history">\n      <h3>\n        <ng-template [ngIf]="!association.url"><em>{{ association.role }}</em>, {{ association.organization }}</ng-template>\n        <ng-template [ngIf]="association.url"><em>{{ association.role }}</em>, <a href="{{ association.url}}">{{ association.organization }}</a></ng-template>\n      </h3>\n      <duration [start]="association.start" [end]="association.end"></duration>\n      <summary>{{ association.summary }}</summary>\n      <highlights [highlights]="association.highlights"></highlights>\n      <keywords [keywords]="association.keywords"></keywords>\n    </div>\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function AffiliationsComponent() {
    _classCallCheck(this, AffiliationsComponent);
  }

  _createClass(AffiliationsComponent, [{
    key: 'empty',
    value: function empty() {
      // has history
      if (this.affiliations.history && Object.keys(this.affiliations.history).length !== 0) {
        return false;
      }
      return true;
    }
  }]);

  return AffiliationsComponent;
}()) || _class);

/***/ }),
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResumeModule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

var _common = __webpack_require__(3);

var _basis = __webpack_require__(62);

var _shared = __webpack_require__(2);

var _basis2 = __webpack_require__(65);

var _resume = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResumeModule = exports.ResumeModule = (_dec = (0, _core.NgModule)({
  imports: [_common.CommonModule],
  declarations: [_basis.BasisComponent, _shared.SHARED_DECLARATIONS, _basis2.BASIS_DECLARATIONS],
  exports: [_basis.BasisComponent],
  providers: []
}), _dec(_class = function () {
  function ResumeModule() {
    _classCallCheck(this, ResumeModule);
  }

  _createClass(ResumeModule, null, [{
    key: 'forRoot',
    value: function forRoot() {
      return {
        ngModule: ResumeModule,
        providers: [_resume.ResumeService]
      };
    }
  }]);

  return ResumeModule;
}()) || _class);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasisComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

var _resume = __webpack_require__(1);

var _basisComponent = __webpack_require__(63);

var _basisComponent2 = _interopRequireDefault(_basisComponent);

var _basisComponent3 = __webpack_require__(64);

var _basisComponent4 = _interopRequireDefault(_basisComponent3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasisComponent = exports.BasisComponent = (_dec = (0, _core.Component)({
  selector: 'resume',
  inputs: ['src', 'data'],
  template: _basisComponent2.default,
  style: [_basisComponent4.default],
  encapsulation: _core.ViewEncapsulation.Native
}), _dec(_class = function () {
  function BasisComponent(resumeService) {
    _classCallCheck(this, BasisComponent);

    this.resumeService = resumeService;
  }

  _createClass(BasisComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      var _this = this;

      this.resumeService.loadResume(this.src);
      this.resumeService.resume$.subscribe(function (update) {
        return _this.resume = update;
      });
    }
  }]);

  return BasisComponent;
}()) || _class);
(0, _core.Inject)(_resume.ResumeService)(BasisComponent, null, 0);

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "<body>\n<main>\n\n<about [name]=\"resume.name\" [contact]=\"resume.contact\"></about>\n<info [info]=\"resume.info\"></info>\n<employment [employment]=\"resume.employment\"></employment>\n<projects [projects]=\"resume.projects\"></projects>\n<skills [skills]=\"resume.skills\"></skills>\n<service [service]=\"resume.service\"></service>\n<education [education]=\"resume.education\"></education>\n<social [social]=\"resume.social\"></social>\n<recognition [recognition]=\"resume.recognition\"></recognition>\n<writing [writing]=\"resume.writing\"></writing>\n<reading [reading]=\"resume.reading\"></reading>\n<speaking [speaking]=\"resume.speaking\"></speaking>\n<governance [governance]=\"resume.governance\"></governance>\n<languages [languages]=\"resume.languages\"></languages>\n<samples [samples]=\"resume.samples\"></samples>\n<references [references]=\"resume.references\"></references>\n<testimonials [testimonials]=\"resume.testimonials\"></testimonials>\n<interests [interests]=\"resume.interests\"></interests>\n<extracurricular [extracurricular]=\"resume.extracurricular\"></extracurricular>\n<affiliations [affiliations]=\"resume.affiliation\"></affiliations>\n\n</main>\n</body>\n"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "/* An empty CSS file. */\n"

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BASIS_DECLARATIONS = exports.BASIS_DIRECTIVES = undefined;

var _default = __webpack_require__(4);

var DIRECTIVES = [_default.AboutComponent, _default.InfoComponent, _default.EmploymentComponent, _default.ProjectsComponent, _default.SkillsComponent, _default.ServiceComponent, _default.EducationComponent, _default.SocialComponent, _default.RecognitionComponent, _default.WritingComponent, _default.ReadingComponent, _default.SpeakingComponent, _default.GovernanceComponent, _default.LanguagesComponent, _default.SamplesComponent, _default.ReferencesComponent, _default.TestimonialsComponent, _default.InterestsComponent, _default.ExtracurricularComponent, _default.AffiliationsComponent];

var BASIS_DIRECTIVES = exports.BASIS_DIRECTIVES = DIRECTIVES;
var BASIS_DECLARATIONS = exports.BASIS_DECLARATIONS = [].concat(DIRECTIVES);

/***/ })
/******/ ]);
});
//# sourceMappingURL=freshresume-basis.js.map