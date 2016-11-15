/**
 * Update component module
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 11/15/16
 */
import { Component } from '@angular/core';
import { ProfileService } from '../app.service';

@Component({
  selector: 'cv-update',
  inputs: [],
  template: `
    <h2>Update resume</h2>
  `
})
export class CVUpdateComponent {
  constructor() {
  }
}
