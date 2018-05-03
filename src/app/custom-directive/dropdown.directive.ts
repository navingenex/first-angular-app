import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() isTrue = false;
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleShow() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

}
