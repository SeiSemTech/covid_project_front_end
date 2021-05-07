import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[matInput]'
})
export class InputDirective {

  @Input('type') typeInput: 'letter'|'user' = 'letter';

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const value = this._el.nativeElement.value;
    switch (this.typeInput) {
      case "user": this._el.nativeElement.value = /[0-9]/g.test(value.charAt(0)) ? '' :
        value.toLowerCase().replace(/[^a-z0-9_]/g, '');
        break;
      case "letter": this._el.nativeElement.value = value.replace(/[^A-Za-zñÑ ]/g, '');
        break;
    }
    if ( value !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
  @HostListener('focusout', ['$event']) onHoverChange(event) {
    const value = this._el.nativeElement.value;
    this._el.nativeElement.value = value.trim();
    if ( value !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
