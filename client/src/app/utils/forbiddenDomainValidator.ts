import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenDomainValidator(domainRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = domainRegex.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
