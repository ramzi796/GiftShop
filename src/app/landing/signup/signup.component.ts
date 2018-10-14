import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FieldsValidators } from '../fields.validators';

@Component({
  selector: 'gs-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.email,
      FieldsValidators.cannotContainSpace
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$'),
      FieldsValidators.cannotContainSpace
    ])
  });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  constructor() { }

  ngOnInit() {
  }

}
