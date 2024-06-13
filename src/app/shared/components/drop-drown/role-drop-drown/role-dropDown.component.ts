import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Role} from "../../../../admin/models/role";

@Component({
  selector: 'app-role-dropDown',
  templateUrl: './role-dropDown.component.html',
  styleUrls: ['./role-dropDown.component.scss']
})

export class RoleDropDownComponent {

  @Input() items: Array<Role> = [];
  @Input() defaultItem: number | undefined;

  ngOnInit() {}

  @Output('valueSelected') valueEmitter = new EventEmitter<number>();

  onSelectionChange(event: any) {
    this.valueEmitter.emit(parseInt(event.target.value));
  }

}
