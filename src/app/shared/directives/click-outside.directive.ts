import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    const isClickedInside = this.elementRef.nativeElement.contains(target);
    if (!isClickedInside) {
      this.clickOutside.emit();
    }
  }

}
