import { ClickOutsideDirective } from './click-outside.directive';
import { ElementRef } from '@angular/core';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

describe('ClickOutsideDirective', () => {
  let directive: ClickOutsideDirective;
  let elementRef: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickOutsideDirective],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: ElementRef, useValue: { nativeElement: document.createElement('div') } }
      ]
    });

    directive = TestBed.inject(ClickOutsideDirective);
    elementRef = TestBed.inject(ElementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
