import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositiveComponent } from './positive.component';
import { SHARED_DECLARATIONS } from '../shared/shared.facade';
import { POSITIVE_DECLARATIONS } from './positive.facade';
import { ResumeService } from '../shared/services/resume';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PositiveComponent,
    SHARED_DECLARATIONS,
    POSITIVE_DECLARATIONS
  ],
  exports: [
    PositiveComponent
  ],
  providers: [
    ResumeService
  ]
})

export class ResumeModule {
  static forRoot() {
    return {
      ngModule: ResumeModule,
      providers: [ ResumeService ]
    }
  }
}
