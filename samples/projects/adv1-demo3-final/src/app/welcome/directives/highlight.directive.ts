import {Directive, ElementRef, Input} from '@angular/core';

@Directive({selector: '[wedHighlight]', exportAs: 'wedHighlight'})
export class HighlightDirective {
  private highlightColor: string = '';

  constructor(private el: ElementRef) {
  }

  public get color(): string {
    return this.highlightColor;
  }

  @Input('wedHighlight')
  public set color(color: string) {
    this.highlightColor = color || this.highlightColor;
    this.setBackgroundColor(color);
  }

  private setBackgroundColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

}
