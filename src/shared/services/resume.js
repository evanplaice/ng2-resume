import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { FreshModel } from '../models/fresh.model';

@Injectable()
export class ResumeService {
  resume$;
  src;

  constructor (@Inject(Http) http) {
    // http bindings for a GET request
    this.http = http;

    // pre-load the data
    this.resume$ = this.loadResume();
  }

  loadResume(path) {
    if (path || this.src) {
      return this.resume$ = this.http.get(path || this.src)
      .map(res => new FreshModel(res.json()))
      .startWith(new FreshModel());
    }
  }
}