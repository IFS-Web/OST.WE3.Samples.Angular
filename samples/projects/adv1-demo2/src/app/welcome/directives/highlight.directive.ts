import {Directive, ElementRef, Input} from '@angular/core';

@Directive({selector: '[wedHighlight]', exportAs: 'wedHighlight'})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.color;
  }

  public get color() {
    return 'yellow';
  }
}
