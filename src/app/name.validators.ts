import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static removeSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { removeSpace: true };
    } else {
      return null;
    }
  }
}
