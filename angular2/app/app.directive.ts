import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[cvHighlight]'
})
export class CVHighlightDirective {
  constructor(el: ElementRef, renderer: Renderer) {
     renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }
}
