import {Component, EventEmitter, Input, Output} from '@angular/core';
import {roles} from "./roles";
import {User} from "../../../../shared/models/user";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {EditUserModal} from "../edit-user-modal/edit-user-modal";
import {AuthService} from "../../../../auth/services/authService/auth.service";

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})
export class UserRowComponent {

  protected readonly roles = roles;
  @Input() item!: User;
  @Output() popUp = new EventEmitter<User>();
  @Output() activateDeactivate = new EventEmitter<User>();
  @Output() updateRank = new EventEmitter<User>();

  constructor() {

  }

  onSelectionChange(newValue: number) {
    this.item.permissionsId = newValue;
    this.updateRank.emit(this.item);
  }

  openDialog(): void {
    this.popUp.emit(this.item);
  }

  activateDeactivateUser() {
    this.activateDeactivate.emit(this.item);
  }

}
