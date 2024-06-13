import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent {

  constructor(private elem: ElementRef) {
  }

  @Output() logOutEvent = new EventEmitter();
  @Input() user: User | null | undefined;
  dropdownOpen: boolean = false;
  public get dropdownElement(): Element {
    return this.elem.nativeElement.querySelector('.dropdown-list')
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? "true" : "false");
  }

  viewProfile() {
    console.log('drop down clicked');
  }

  logOut() {
    this.logOutEvent.emit();
  }

}
