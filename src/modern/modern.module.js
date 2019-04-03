import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { ModernComponent } from './modern.component';
import { SHARED_DECLARATIONS } from '../shared/shared.facade';
import { MODERN_DECLARATIONS } from './modern.facade';

import { ResumeService } from '../shared/services/resume';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ModernComponent,
    SHARED_DECLARATIONS,
    MODERN_DECLARATIONS
  ],
  exports: [
    ModernComponent
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
