import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../../../shared/models/user";

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent {

  @Input() items: Array<User> = [];

  ngOnInit() {}

  @Output('valueSelected') valueEmitter = new EventEmitter<string>();

  onSelectionChange(event: any) {
    this.valueEmitter.emit(event.target.value);
  }

}
