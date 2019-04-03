import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FreshModel } from '../models/fresh.model';
import { map, startWith } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ResumeService {
  resume$;
  src;

  constructor (@Inject(HttpClient) http) {
    // http bindings for a GET request
    this.http = http;

    // pre-load the data
    this.resume$ = this.loadResume();
  }

  loadResume(path) {
    if (path || this.src) {
      return this.resume$ = this.http.get(path || this.src)
        .pipe(
          map(res => new FreshModel(res)),
          startWith(new FreshModel())
        );
    }
  }
}
