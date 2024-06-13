import {AbstractControl, ValidatorFn} from "@angular/forms";

export const passwordMatchingValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {

  const password = control.get('password')?.value;
  const confirmPassword = control.get('confPassword')?.value;

  // Check if passwords match
  return password === confirmPassword ? null : { notmatched: true };

};
