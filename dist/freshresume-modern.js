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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
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
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
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

var _modern = __webpack_require__(73);

var _shared = __webpack_require__(2);

var _modern2 = __webpack_require__(77);

var _resume = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResumeModule = exports.ResumeModule = (_dec = (0, _core.NgModule)({
  imports: [_common.CommonModule],
  declarations: [_modern.ModernComponent, _shared.SHARED_DECLARATIONS, _modern2.MODERN_DECLARATIONS],
  exports: [_modern.ModernComponent],
  providers: [_resume.ResumeService]
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModernComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

var _resume = __webpack_require__(1);

var _modernComponent = __webpack_require__(74);

var _modernComponent2 = _interopRequireDefault(_modernComponent);

var _fontAwesome = __webpack_require__(75);

var _fontAwesome2 = _interopRequireDefault(_fontAwesome);

var _modernComponent3 = __webpack_require__(76);

var _modernComponent4 = _interopRequireDefault(_modernComponent3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModernComponent = exports.ModernComponent = (_dec = (0, _core.Component)({
  selector: 'resume',
  inputs: ['src', 'data'],
  template: _modernComponent2.default,
  styles: [_modernComponent4.default, _fontAwesome2.default],
  encapsulation: _core.ViewEncapsulation.Native
}), _dec(_class = function () {
  function ModernComponent(resumeService) {
    _classCallCheck(this, ModernComponent);

    this.resumeService = resumeService;
  }

  _createClass(ModernComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      var _this = this;

      this.resumeService.loadResume(this.src);
      this.resumeService.resume$.subscribe(function (update) {
        return _this.resume = update;
      });
    }
  }]);

  return ModernComponent;
}()) || _class);
(0, _core.Inject)(_resume.ResumeService)(ModernComponent, null, 0);

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "<body>\n<main id=\"main\">\n<div id=\"container\">\n\n<about [name]=\"resume.name\" [contact]=\"resume.contact\" [social]=\"resume.social\"></about>\n<info [info]=\"resume.info\"></info>\n<skills [skills]=\"resume.skills\"></skills>\n<employment [employment]=\"resume.employment\"></employment>\n<projects [projects]=\"resume.projects\"></projects>\n<education [education]=\"resume.education\"></education>\n<affiliations [affiliations]=\"resume.affiliation\"></affiliations>\n<service [service]=\"resume.service\"></service>\n<writing [writing]=\"resume.writing\"></writing>\n<reading [reading]=\"resume.reading\"></reading>\n<recognition [recognition]=\"resume.recognition\"></recognition>\n<speaking [speaking]=\"resume.speaking\"></speaking>\n<governance [governance]=\"resume.governance\"></governance>\n<languages [languages]=\"resume.languages\"></languages>\n<samples [samples]=\"resume.samples\"></samples>\n<references [references]=\"resume.references\"></references>\n<testimonials [testimonials]=\"resume.testimonials\"></testimonials>\n<interests [interests]=\"resume.interests\"></interests>\n<extracurricular [extracurricular]=\"resume.extracurricular\"></extracurricular>\n\n</div>\n</main>\n</body>\n"

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('../fonts/fontawesome-webfont.eot?v=4.7.0');\n  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n.fa-edge:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n.fa-modx:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n.fa-usb:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.fa-percent:before {\n  content: \"\\f295\";\n}\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n.fa-envira:before {\n  content: \"\\f299\";\n}\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n.fa-handshake-o:before {\n  content: \"\\f2b5\";\n}\n.fa-envelope-open:before {\n  content: \"\\f2b6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\f2b7\";\n}\n.fa-linode:before {\n  content: \"\\f2b8\";\n}\n.fa-address-book:before {\n  content: \"\\f2b9\";\n}\n.fa-address-book-o:before {\n  content: \"\\f2ba\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\f2bb\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\f2bc\";\n}\n.fa-user-circle:before {\n  content: \"\\f2bd\";\n}\n.fa-user-circle-o:before {\n  content: \"\\f2be\";\n}\n.fa-user-o:before {\n  content: \"\\f2c0\";\n}\n.fa-id-badge:before {\n  content: \"\\f2c1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\f2c2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\f2c3\";\n}\n.fa-quora:before {\n  content: \"\\f2c4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\f2c5\";\n}\n.fa-telegram:before {\n  content: \"\\f2c6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\f2c7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\f2c9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\";\n}\n.fa-shower:before {\n  content: \"\\f2cc\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\f2cd\";\n}\n.fa-podcast:before {\n  content: \"\\f2ce\";\n}\n.fa-window-maximize:before {\n  content: \"\\f2d0\";\n}\n.fa-window-minimize:before {\n  content: \"\\f2d1\";\n}\n.fa-window-restore:before {\n  content: \"\\f2d2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\f2d3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\f2d4\";\n}\n.fa-bandcamp:before {\n  content: \"\\f2d5\";\n}\n.fa-grav:before {\n  content: \"\\f2d6\";\n}\n.fa-etsy:before {\n  content: \"\\f2d7\";\n}\n.fa-imdb:before {\n  content: \"\\f2d8\";\n}\n.fa-ravelry:before {\n  content: \"\\f2d9\";\n}\n.fa-eercast:before {\n  content: \"\\f2da\";\n}\n.fa-microchip:before {\n  content: \"\\f2db\";\n}\n.fa-snowflake-o:before {\n  content: \"\\f2dc\";\n}\n.fa-superpowers:before {\n  content: \"\\f2dd\";\n}\n.fa-wpexplorer:before {\n  content: \"\\f2de\";\n}\n.fa-meetup:before {\n  content: \"\\f2e0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n"

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic);\n\n* {\n  box-sizing: border-box;\n}\n\nmain {\n  display: block;\n}\n\nbody {\n  font-family: 'Helvetica Neue', Helvetica, 'Lato', sans-serif;\n  font-size: 15px;\n  color: #333;\n  line-height: 1.42857143;\n  background-color: #F0F0F0;\n  margin: 0;\n  padding: 0;\n}\n\n#main {\n  background-color: #FFF;\n  margin: 10px;\n  padding: 10px;\n  border: 1px solid #E6E6E6;\n}\n\n#container > header {\n  padding-top: 6em;\n  padding-bottom: 1em;\n}\n\nsection {\n  margin-left: 5em;\n  position: relative;\n  display: block;\n}\n\nspan.fa\n{\n  position: absolute;\n  top: 4px;\n  left: -50px;\n  font-size: 30px;\n  color: #BFC1C3;\n}\n\nspan.fa\n{\n  position: absolute;\n  top: 4px;\n  left: -50px;\n  font-size: 30px;\n  color: #BFC1C3;\n}\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #EEE;\n}\n\n.tenure, .keywords {\n  font-size: 75%;\n}\n\nh1 {\n  margin: 0;\n  font-size: 46px;\n}\n\nh2 {\n  font-size: 24px;\n  color: #BFC1C3;\n  text-transform: uppercase;\n  font-weight: normal;\n}\n\nh3 {\n  margin-bottom: 0;\n  font-size: 18px;\n}\n\na, a:visited {\n  color: #428BCA;\n  text-decoration: none;\n  font-weight: bold;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.defunct {\n  color: #989898;\n  font-weight: bold;\n}\n\n#about > p > strong {\n  font-size: 1.25em;\n}\n\n\n.label-keyword {\n  display: inline-block;\n  background: #7eb0db;\n  color: white;\n  font-size: 0.9em;\n  padding: 5px;\n  border: 1px solid #357ebd;\n  border-radius: 5px;\n  margin-top: 2px;\n}\n\n.card-skills {\n    position: relative;\n}\n.card-nested {\n    min-height: 0;\n    margin-bottom: 10px;\n    border-width: 1px 0 0 0;\n}\n.card {\n    background: #FFF;\n    border-radius: 3px;\n    padding: 10px;\n}\n\n.skill-level {\n  border-radius: 3px;\n  position: absolute;\n  top: 10px;\n  bottom: 10px;\n  left: 0;\n  width: 10px;\n  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);\n}\n.skill-level .skill-progress {\n  position: absolute;\n  border-radius: 3px;\n  bottom: 0;\n  width: 100%;\n  -webkit-transition: height 1s ease;\n}\n.skill-level .skill-progress.beginner {\n  height: 50%;\n  background: #e74c3c;\n}\n.skill-level .skill-progress.intermediate {\n  height: 70%;\n  background: #f1c40f;\n}\n.skill-level .skill-progress.advanced {\n  height: 80%;\n  background: #428bca;\n}\n.skill-level .skill-progress.master {\n  height: 95%;\n  background: #5cb85c;\n}\n.skill-info {\n  margin-left: 10px;\n}\n@media (max-width: 480px) {\n  .skill-info {\n    margin-left: 20px;\n  }\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.card-skills {\n  position: relative;\n}\n\n.space-top {\n    margin-top: 10px;\n}\n\n#container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n#elevator-pitch {\n  text-align: center;\n  font-size: 24px;\n  color: #BFC1C3;\n  text-transform: uppercase;\n  font-weight: normal;\n}\n\n.res-label {\n  font-style: italic;\n}\n"

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODERN_DECLARATIONS = exports.MODERN_DIRECTIVES = undefined;

var _skills = __webpack_require__(78);

var _default = __webpack_require__(4);

var DIRECTIVES = [_default.AboutComponent, _default.InfoComponent, _default.EmploymentComponent, _default.ProjectsComponent, _skills.SkillsComponent, _default.ServiceComponent, _default.EducationComponent, _default.SocialComponent, _default.RecognitionComponent, _default.WritingComponent, _default.ReadingComponent, _default.SpeakingComponent, _default.GovernanceComponent, _default.LanguagesComponent, _default.SamplesComponent, _default.ReferencesComponent, _default.TestimonialsComponent, _default.InterestsComponent, _default.ExtracurricularComponent, _default.AffiliationsComponent];

var MODERN_DIRECTIVES = exports.MODERN_DIRECTIVES = DIRECTIVES;
var MODERN_DECLARATIONS = exports.MODERN_DECLARATIONS = [].concat(DIRECTIVES);

/***/ }),
/* 78 */
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
  template: '\n  <ng-template [ngIf]="!empty()">\n  <hr>\n  <section id="skills">\n    <header title="Skills"><span class="fa fa-lg fa-code"></span></header>\n    <ul *ngFor="let set of skills.sets" class="list-unstyled">\n      <li class="card card-nested card-skills">\n        <div class="skill-level" rel="tooltip" title="{{ set.level }}" data-placement="left">\n          <div class="skill-progress {{ set.level | lowercase }}"></div>\n        </div>\n        <div class="skill-info">\n          <strong>{{ set.name }}</strong>\n          <div class="space-top labels">\n            <span *ngIf="set.skills">\n              <span *ngFor="let skill of set.skills" class="label label-keyword">{{ skill }}</span>\n            </span>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </section>\n  </ng-template>\n  '
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=freshresume-modern.js.map