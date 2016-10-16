/**
 * App directives
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/15/16
 */
import { Directive, ElementRef, Input, Renderer } from '@angular/core';

/**
 * Highlight directive
 * highlight text in yellow
 */
@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef, renderer: Renderer) {
     renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }
}
