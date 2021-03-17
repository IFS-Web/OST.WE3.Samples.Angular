import {Directive, Input} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS, NgModel, ValidationErrors} from '@angular/forms';

@Directive({
  selector: '[wedValidateEqual][ngModel]',
  providers: [
    // TODO: Demo 2
  ]
})
export class ValidationDirective implements Validator {

  @Input()
  public wedValidateEqual?: NgModel;

  constructor() {
  }

  validate({value: modelValue}: AbstractControl): ValidationErrors | null {
    // TODO: Demo 2
    return null;
  }

  private resetErrorOnForeign() {
    if (this.wedValidateEqual?.errors) {
      delete this.wedValidateEqual.errors.validateEqual;
      if (Object.keys(this.wedValidateEqual.errors).length === 0) {
        this.wedValidateEqual.control.setErrors(null);
      }
    }
  }
}
