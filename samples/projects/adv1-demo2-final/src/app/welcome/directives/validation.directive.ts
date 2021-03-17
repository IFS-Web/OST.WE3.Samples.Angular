import {Directive, Input} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS, NgModel, ValidationErrors} from '@angular/forms';

@Directive({
  selector: '[wedValidateEqual][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: ValidationDirective, multi: true}
  ]
})
export class ValidationDirective implements Validator {

  @Input()
  public wedValidateEqual?: NgModel;

  constructor() {
  }

  validate({value: modelValue}: AbstractControl): ValidationErrors | null {
    if (this.wedValidateEqual) {
      // value not equal
      if (modelValue !== this.wedValidateEqual.value) {
        return {validateEqual: false};
      } else {
        this.resetErrorOnForeign();
      }
    }
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
