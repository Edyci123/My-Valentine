import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void {

  }

  private createForm() {
    this.form = new FormGroup({
      password: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(128)
      ])
    })
  }
}
