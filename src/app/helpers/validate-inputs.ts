import {FormBuilder, FormGroup} from "@angular/forms";

export class ValidateInputs {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  validateInput(controlName: string, errorType: string) {
    return this.form.controls[controlName].hasError(errorType);
  }

}
