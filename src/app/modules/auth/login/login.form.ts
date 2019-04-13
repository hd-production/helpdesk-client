import {FormControl, FormGroup} from '@angular/forms';

export function createLoginForm(): FormGroup {
  return new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
}
