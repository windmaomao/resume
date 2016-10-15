import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  constructor(el: ElementRef, renderer: Renderer) {
     renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }
}
