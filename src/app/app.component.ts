import { Component, ElementRef } from '@angular/core';

declare const mesmotronic;

@Component({
  selector: 'app-embed',
  template: '',
  styles: [`
    :host {
      position: absolute;
      top: 24px;
      right: 24px;
      bottom: 24px;
      left: 24px;
      border: 1px dashed #CCC;
    }
  `]
})
export class AppEmbedComponent {
  constructor(elRef: ElementRef) {
    const el: HTMLElement = elRef.nativeElement;
    const app = new mesmotronic.HelloApp({el, name: 'App'});
  }
}
