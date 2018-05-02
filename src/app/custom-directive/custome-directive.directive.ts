import { Directive, OnInit, ElementRef, HostListener, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomeDirective]'
})
export class CustomeDirectiveDirective implements OnInit {
  // property binding
  @Input() defaultColor = 'grey';
  @Input() hilightColor = 'green';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('style.backgroundColor') backgroundColor = '#caea12';
  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.hilightColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '30px');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elRef.nativeElement, 'transition-property', '300px');
    this.renderer.setStyle(this.elRef.nativeElement, 'transition-duration', '1s');
  }



  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey');
    // @HostBinding
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', 'initial');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '14px');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.elRef.nativeElement, 'transition-property', '100px');
    this.renderer.setStyle(this.elRef.nativeElement, 'transition-duration', '1s');
  }
  ngOnInit() { }

}
