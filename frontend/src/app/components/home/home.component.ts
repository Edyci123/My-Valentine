import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void {

  }

  private createForm() {
    this.form = new FormGroup({
      name: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(128)
      ])
    })
  }

}
