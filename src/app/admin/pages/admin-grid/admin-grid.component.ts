import { Component } from '@angular/core';
import {AuthService} from "../../../auth/services/authService/auth.service";
import {UserService} from "../../services/userService/user.service";
import {first, Subject, takeUntil, tap} from "rxjs";
import {User} from "../../../shared/models/user";
import {EditUserModal} from "../../components/Presentational/edit-user-modal/edit-user-modal";
import {MatDialog} from "@angular/material/dialog";
import {UpdateUser} from "../../models/updateUser";
import {AddUserModalComponent} from "../../components/Smart/add-user-modal/add-user-modal.component";
import {UpdatePermissionRequest} from "../../models/updatePermissionRequest";

@Component({
  selector: 'app-admin-grid',
  templateUrl: './admin-grid.component.html',
  styleUrls: ['./admin-grid.component.scss']
})
export class AdminGridComponent {

  protected data?: User[];
  protected usersList?: User[];

/*  protected data = usersList;
  protected usersList = this.data;*/

  protected usersTitle?: string;
  protected user;
  private showDeleted: boolean | null = null;

  private unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(private authService: AuthService, private userService: UserService, public dialog: MatDialog) {
    this.user = this.authService.userValue;
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  ngOnInit() {

    this.getUsers();

  }

  getUsers() {

    this.userService.getUsersList()
      .pipe(
        tap(() => {
          console.log('Get all users attempt');
        }),
        takeUntil(this.unsubscribeAll) // Add takeUntil operator
      )
      .subscribe({
        next: (users) => {
          this.data = users;
          this.usersList = this.data;
          this.usersTitle = "Users (" + this.usersList?.length + ")";
        },
        error: (value) => {
          console.error('Get users failed', value);
        }
      });

  }

  onSelectionChange(user: User) {

    let updateRankRequest: UpdatePermissionRequest = { id: user.id, permissionsId: user.permissionsId }

    this.userService.updateUserPermission(updateRankRequest)
      .pipe(
        first(),
        tap(() => {
          console.log("Updating rank...")
        })
      )
      .subscribe({
        next: (value) => {
          console.log("Rank updated")
          this.getUsers();
        },
        error: (value) => {
          console.log("Updating rank failed", value)
        }
      });

  }

  openDialog(event: User) {

    const dialogRef = this.dialog.open(EditUserModal, {
      width: '400px',
      panelClass: 'modal-dialog-container',
      data : event
    });
    dialogRef.afterClosed().subscribe((newUserName) => {
      if (newUserName) {

        let updateUser: UpdateUser = { id: event.id, name: newUserName };
        this.userService.updateUserName(updateUser)
          .pipe(
            tap(() => {
              console.log('Update user attempt');
            }),
            takeUntil(this.unsubscribeAll) // Add takeUntil operator
          )
          .subscribe({
            next: (user) => {
              console.log('User updated', user);
              this.getUsers();
            },
            error: (value) => {
              console.error('Update user failed', value);
            }
          });
        console.log('The dialog was closed ', event)
      }
    });

  }

  activateDeactivateUser(user: User) {
    console.log('Activate/Deactivate user ', user)

    if(user.isDeleted) {
      this.userService.activateUser(user.id)
        .pipe(
          tap(() => {
            console.log('Activate user attempt');
          }),
          takeUntil(this.unsubscribeAll) // Add takeUntil operator
        )
        .subscribe({
          next: (user) => {
            console.log('User activated', user);
            this.getUsers();
          },
          error: (value) => {
            console.error('Activate user failed', value);
          }
        });
    }
    this.userService.deactivateUser(user.id)
      .pipe(
        tap(() => {
          console.log('Deactivate user attempt');
        }),
        takeUntil(this.unsubscribeAll) // Add takeUntil operator
      )
      .subscribe({
        next: (user) => {
          console.log('User deactivated');
          this.getUsers();
        },
        error: (value) => {
          console.error('Deactivate user failed', value);
        }
      });

  }

  onSearchChange(event: string) {
      this.usersList = this.data?.filter(user => user.name.toLowerCase().includes(event.toLowerCase()));
      this.usersTitle = "Users (" + this.usersList?.length + ")";
  }

  logOut() {
    this.authService.logout();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddUserModalComponent, {
      width: '400px',
      height: '500px',
      panelClass: 'add-modal-dialog-container',
      autoFocus: false,
      data : { id: 0, name: '' }
    });
    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        console.log('The dialog was closed ')
        this.getUsers();
      }
    });
  }

  toggleShowDeleted() {
    if (this.showDeleted === true) {
      this.usersList = this.data?.filter(user => user.isDeleted);
    } else if (this.showDeleted === false) {
      this.usersList = this.data?.filter(user => !user.isDeleted);
    } else {
      this.usersList = this.data;
    }
  }

  filterUsers() {
    if (this.showDeleted === true) {
      this.showDeleted = false;
    } else if (this.showDeleted === false) {
      this.showDeleted = null;
    } else {
      this.showDeleted = true;
    }
    this.toggleShowDeleted();
  }

}
