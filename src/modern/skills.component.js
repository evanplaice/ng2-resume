import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  inputs: [ 'skills' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="skills">
    <header title="Skills"><span class="fa fa-lg fa-code"></span></header>
    <ul *ngFor="let set of skills.sets" class="list-unstyled">
      <li class="card card-nested card-skills">
        <div class="skill-level" rel="tooltip" title="{{ set.level }}" data-placement="left">
          <div class="skill-progress {{ set.level | lowercase }}"></div>
        </div>
        <div class="skill-info">
          <strong>{{ set.name }}</strong>
          <div class="space-top labels">
            <span *ngIf="set.skills">
              <span *ngFor="let skill of set.skills" class="label label-keyword">{{ skill }}</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </section>
  </ng-template>
  `
})
export class SkillsComponent {
  empty () {
    // has sets
    if (this.skills.sets && Object.keys(this.skills.sets).length !== 0) {
      return false;
    }
    // has skills
    if (this.skills.list && Object.keys(this.skills.list).length !== 0) {
      return false;
    }
    return true
  }
}
