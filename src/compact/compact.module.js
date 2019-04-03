import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { CompactComponent } from './compact.component';
import { SHARED_DECLARATIONS } from '../shared/shared.facade';
import { COMPACT_DECLARATIONS } from './compact.facade';

import { ResumeService } from '../shared/services/resume';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    CompactComponent,
    SHARED_DECLARATIONS,
    COMPACT_DECLARATIONS
  ],
  exports: [
    CompactComponent
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
