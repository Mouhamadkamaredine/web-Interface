import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/userService/user.service";
import {User} from "../../../../shared/models/user";
import {Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './edit-user-modal.html',
  styleUrls: ['./edit-user-modal.scss']
})

export class EditUserModal {

  generatedValue?: string;
  form!: FormGroup;
  submitted = false;
  protected readonly userNameControl: any;
  private unsubscribeAll: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  constructor(public dialogRef: MatDialogRef<EditUserModal>, @Inject(MAT_DIALOG_DATA) public data: User, private formBuilder: FormBuilder, private userService: UserService) {

    this.form = this.formBuilder.group({
      userName: ['', Validators.pattern('^[a-zA-Z]{3,}$')],
    });

    this.userNameControl = this.form.get('userName');

  }

  validateInput(controlName: string, errorType: string) {
    return this.form.controls[controlName].hasError(errorType);
  }

  ngOnInit() {}

  getGenerateValue() {
    this.userService.resetUserPassword(this.data.id)
      .pipe(
        tap(() => {
          console.log('Reset user password attempt');
        }),
        takeUntil(this.unsubscribeAll) // Add takeUntil operator
      )
      .subscribe({
        next: (resetUserPassword) => {
          this.generatedValue = resetUserPassword.password;
          console.log('User password reset');
        },
        error: (value) => {
          console.error('Reset user password failed', value);
        }
      });
  }

  onSubmit() {

    this.submitted = true;

    if (this.form.invalid || this.userNameControl.value == this.data.name ) {
      return;
    }
    this.dialogRef.close(this.userNameControl.value);

  }

}
