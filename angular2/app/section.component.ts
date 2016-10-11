/**
 * Section component module
 * Generic component handles page section creation
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/10/16
 */
import { Component } from '@angular/core';

@Component({
  selector: 'cv-section',
  inputs: ['section'],
  templateUrl: 'templates/page.section.html'
})
export class CVSectionComponent { }
