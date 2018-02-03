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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
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
/* 60 */
/***/ (function(module, exports) {

module.exports = "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url('../fonts/fontawesome-webfont.eot?v=4.7.0');src:url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'),url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-gear:before,.fa-cog:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-gears:before,.fa-cogs:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-unsorted:before,.fa-sort:before{content:\"\\f0dc\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\f0dd\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-legal:before,.fa-gavel:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-flash:before,.fa-bolt:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\f150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\f151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\f152\"}.fa-euro:before,.fa-eur:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-rupee:before,.fa-inr:before{content:\"\\f156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\f157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\f158\"}.fa-won:before,.fa-krw:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\f19c\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\f1c5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\f1c6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-ge:before,.fa-empire:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\f1d8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-hotel:before,.fa-bed:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-tv:before,.fa-television:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-handshake-o:before{content:\"\\f2b5\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-o:before{content:\"\\f2b7\"}.fa-linode:before{content:\"\\f2b8\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-book-o:before{content:\"\\f2ba\"}.fa-vcard:before,.fa-address-card:before{content:\"\\f2bb\"}.fa-vcard-o:before,.fa-address-card-o:before{content:\"\\f2bc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-circle-o:before{content:\"\\f2be\"}.fa-user-o:before{content:\"\\f2c0\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\f2c3\"}.fa-quora:before{content:\"\\f2c4\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-shower:before{content:\"\\f2cc\"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:\"\\f2cd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f2d3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\f2d4\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-grav:before{content:\"\\f2d6\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-eercast:before{content:\"\\f2da\"}.fa-microchip:before{content:\"\\f2db\"}.fa-snowflake-o:before{content:\"\\f2dc\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-meetup:before{content:\"\\f2e0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}\n"

/***/ }),
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
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

var _compact = __webpack_require__(67);

var _shared = __webpack_require__(2);

var _compact2 = __webpack_require__(70);

var _resume = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResumeModule = exports.ResumeModule = (_dec = (0, _core.NgModule)({
  imports: [_common.CommonModule],
  declarations: [_compact.CompactComponent, _shared.SHARED_DECLARATIONS, _compact2.COMPACT_DECLARATIONS],
  exports: [_compact.CompactComponent],
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompactComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(0);

var _resume = __webpack_require__(1);

var _compactComponent = __webpack_require__(68);

var _compactComponent2 = _interopRequireDefault(_compactComponent);

var _fontAwesomeMin = __webpack_require__(60);

var _fontAwesomeMin2 = _interopRequireDefault(_fontAwesomeMin);

var _compactComponent3 = __webpack_require__(69);

var _compactComponent4 = _interopRequireDefault(_compactComponent3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CompactComponent = exports.CompactComponent = (_dec = (0, _core.Component)({
  selector: 'resume',
  inputs: ['src', 'data'],
  template: _compactComponent2.default,
  styles: [_compactComponent4.default, _fontAwesomeMin2.default],
  encapsulation: _core.ViewEncapsulation.Native
}), _dec(_class = function () {
  function CompactComponent(resumeService) {
    _classCallCheck(this, CompactComponent);

    this.resumeService = resumeService;
  }

  _createClass(CompactComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      var _this = this;

      this.resumeService.loadResume(this.src);
      this.resumeService.resume$.subscribe(function (update) {
        return _this.resume = update;
      });
    }
  }]);

  return CompactComponent;
}()) || _class);
(0, _core.Inject)(_resume.ResumeService)(CompactComponent, null, 0);

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "<body>\n<main id=\"main\">\n<div id=\"container\">\n\n<about [name]=\"resume.name\" [contact]=\"resume.contact\"></about>\n<info [info]=\"resume.info\"></info>\n<skills [skills]=\"resume.skills\"></skills>\n<employment [employment]=\"resume.employment\"></employment>\n<projects [projects]=\"resume.projects\"></projects>\n<education [education]=\"resume.education\"></education>\n<service [service]=\"resume.service\"></service>\n<samples [samples]=\"resume.samples\"></samples>\n<writing [writing]=\"resume.writing\"></writing>\n<reading [reading]=\"resume.reading\"></reading>\n<recognition [recognition]=\"resume.recognition\"></recognition>\n<speaking [speaking]=\"resume.speaking\"></speaking>\n<governance [governance]=\"resume.governance\"></governance>\n<languages [languages]=\"resume.languages\"></languages>\n<references [references]=\"resume.references\"></references>\n<testimonials [testimonials]=\"resume.testimonials\"></testimonials>\n<interests [interests]=\"resume.interests\"></interests>\n<extracurricular [extracurricular]=\"resume.extracurricular\"></extracurricular>\n<affiliations [affiliations]=\"resume.affiliation\"></affiliations>\n\n</div>\n</main>\n</body>\n"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic);\n\nhtml, body, main, section, header, ul, p, h1, h2, h3 {\n  font-family: {{{fontList 'default'}}};\n  font-size: 12px;\n  margin: 0; padding: 0;\n  display: block;\n}\n\na {\n  color: #0064BD;\n  text-decoration: none;\n}\n\na:visited {\n  color: #7B0796;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nh2 {\n  text-transform: uppercase;\n}\n\nh3 {\n  font-size: 1em;\n}\n\nhr {\n  border: none;\n  border-top: 1px solid #B3B3B3;\n}\n\nmain {\n  padding: 15px;\n  max-width: 700px;\n  margin: 0 auto;\n}\n\nsection {\n  margin-top: 1em;\n}\n\nli {\n  margin-left: 2em;\n}\n\np, li {\n  text-align: justify;\n  clear: both;\n}\n\n.tenure {\n  float: right;\n}\n\nthead {\n  display: none;\n}\n\nmain > header {\n  width: 100%;\n  float: left;\n  margin-bottom: 0;\n  position: relative;\n}\n\n\nh3 {\n  display: inline-block;\n  line-height: 1;\n}\n#contact {\n  float: right;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n#contact > div {\n  display: inline-block;\n  margin-left: 5px;\n}\n\nspan.fa {\n  text-align: left;\n  margin-right: 3px;\n  float: left;\n}\n\nsection > div {\n  margin-bottom: 1em;\n  clear: both;\n}\n\nspan.keywords {\n  font-size: 10px;\n  color: gray;\n  text-align: right;\n}\n"

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COMPACT_DECLARATIONS = exports.COMPACT_DIRECTIVES = undefined;

var _info = __webpack_require__(71);

var _default = __webpack_require__(4);

var DIRECTIVES = [_default.AboutComponent, _info.InfoComponent, _default.EmploymentComponent, _default.ProjectsComponent, _default.SkillsComponent, _default.ServiceComponent, _default.EducationComponent, _default.SocialComponent, _default.RecognitionComponent, _default.WritingComponent, _default.ReadingComponent, _default.SpeakingComponent, _default.GovernanceComponent, _default.LanguagesComponent, _default.SamplesComponent, _default.ReferencesComponent, _default.TestimonialsComponent, _default.InterestsComponent, _default.ExtracurricularComponent, _default.AffiliationsComponent];

var COMPACT_DIRECTIVES = exports.COMPACT_DIRECTIVES = DIRECTIVES;
var COMPACT_DECLARATIONS = exports.COMPACT_DECLARATIONS = [].concat(DIRECTIVES);

/***/ }),
/* 71 */
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
  template: '\n  <ng-template [ngIf]="!empty()">\n  <section id="info">\n    {{ info.brief }}\n  </section>\n  </ng-template>\n  '
}), _dec(_class = function () {
  function InfoComponent() {
    _classCallCheck(this, InfoComponent);
  }

  _createClass(InfoComponent, [{
    key: 'empty',
    value: function empty() {
      return Object.keys(this.info).length === 0;
    }
  }]);

  return InfoComponent;
}()) || _class);

/***/ })
/******/ ]);
});
//# sourceMappingURL=freshresume-compact.js.map