/**
 * App components
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/15/16
 */
import { Component } from '@angular/core';
import { ProfileService } from './app.service';

/**
 * App component
 * root component for HTML page entry
 */
@Component({
  selector: 'app-root',
  template: `
    <layout></layout>
  `,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
}
