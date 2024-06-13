import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../../../shared/models/user";
import {EditUserModal} from "../../Presentational/edit-user-modal/edit-user-modal";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../../../auth/services/authService/auth.service";

@Component({
  selector: 'app-user-rows',
  templateUrl: './user-rows.component.html',
  styleUrls: ['./user-rows.component.scss']
})
export class UserRowsComponent {

  protected readonly userId = this.authService.userValue?.id;
  @Input() items?: User[] = [];
  @Output() popUp = new EventEmitter<User>();
  @Output() activateDeactivate = new EventEmitter<User>();
  @Output() updateRank = new EventEmitter<User>();

  constructor(private authService: AuthService) {}

  openDialog(event: User): void {
    this.popUp.emit(event);
  }

  activateDeactivateUser(event: User): void {
    this.activateDeactivate.emit(event);
  }

  onSelectionChange(user: User) {
    this.updateRank.emit(user);
  }

}
