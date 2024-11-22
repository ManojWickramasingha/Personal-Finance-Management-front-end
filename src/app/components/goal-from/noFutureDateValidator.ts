import { AbstractControl, ValidatorFn } from '@angular/forms';

export function noFutureDateValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (control.value) {
      const selectedDate = new Date(control.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate > today) {
        return { futureDate: true };
      }
    }
    return null;
  };
}
