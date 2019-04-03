import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BasisComponent } from './basis.component';
import { SHARED_DECLARATIONS } from '../shared/shared.facade';
import { BASIS_DECLARATIONS } from './basis.facade';

import { ResumeService } from '../shared/services/resume';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    BasisComponent,
    SHARED_DECLARATIONS,
    BASIS_DECLARATIONS
  ],
  exports: [
    BasisComponent
  ],
  providers: []
})

export class ResumeModule {
  static forRoot() {
    return {
      ngModule: ResumeModule,
      providers: [ ResumeService ]
    }
  }
}
