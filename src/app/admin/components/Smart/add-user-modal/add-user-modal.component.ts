import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {first, Subject, tap} from "rxjs";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../../shared/models/user";
import {UserService} from "../../../services/userService/user.service";
import {passwordMatchingValidator} from "../../../../helpers/validator";
import {roles, rolesNoAdmin} from "../../Presentational/user-row/roles";
import {AddUserRequest} from "../../../models/addUserRequest";
import {Role} from "../../../models/role";

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent {

  form!: FormGroup;
  submitted = false;
  selectedRole: number = 4;
  protected readonly roles: Array<Role> = rolesNoAdmin;
  protected readonly userNameControl: any;
  protected readonly emailControl: any;
  protected readonly passwordControl: any;
  protected readonly confPasswordControl: any;
  private unsubscribeAll: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

    constructor(public dialogRef: MatDialogRef<AddUserModalComponent>, @Inject(MAT_DIALOG_DATA) public data: User, private formBuilder: FormBuilder, private userService: UserService) {

    this.form = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,}$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@(?:multilaneinc\\.com|htpsal\\.com|hazenlabs\\.com)$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[^\\w\\d\\s]).{15,}$')]],
      confPassword: ['', Validators.required],
    } , { validators: passwordMatchingValidator } );

    this.userNameControl = this.form.get('userName');
    this.emailControl = this.form.get('email');
    this.passwordControl = this.form.get('password');
    this.confPasswordControl = this.form.get('confPassword');

  }

  validateInput(controlName: string, errorType: string) {
    return this.form.controls[controlName].hasError(errorType);
  }

  onSelectionChange(rank: number) {
    this.selectedRole = rank;
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    let addUserRequest: AddUserRequest = {
      name: this.userNameControl.value,
      email: this.emailControl.value,
      password: this.passwordControl.value,
      confirmPassword: this.confPasswordControl.value,
      permissionsId: this.selectedRole ? this.selectedRole : 4
    }

    this.userService.addUser(addUserRequest)
      .pipe(
        first(),
        tap((value) => {
          console.log('Adding user...');
        }),
      )
      .subscribe({
        next: (value) => {
          console.log('User added');
          this.dialogRef.close(value);
        },
        error: (value) => {
          console.error('Add user failed', value);
        }
      });

  }

}
