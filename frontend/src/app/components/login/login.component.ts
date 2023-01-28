import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IncorrectPasswordDialogComponent } from 'src/app/components/login/incorrect-password-dialog/incorrect-password-dialog.component';
import { HintDialogComponent } from './hint-dialog/hint-dialog.component';

const passwordValidators: string[] = ['alina', 'florea', 'iubirea', 'iubire', 'inima', 'iubitha', 'dragostea'];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  
  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void {

    if (this.isPasswordCorrect()) {
      this.authService.login();
      this.router.navigate(['']);
    } else {
      this.openWrongPasswordDialog();
      this.form.reset();
    }
  }

  private createForm() {
    this.form = new FormGroup({
      password: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(128)
      ])
    })
  }

  private isPasswordCorrect(): boolean {
    let password: string = this.form.controls['password'].value.toLowerCase();
    let isCorrect: boolean = false;

    passwordValidators.forEach((element): void => {
      if (password.includes(element)) {
        isCorrect = true;
      }
    });

    return isCorrect;
  }

  private openWrongPasswordDialog(): void {
    this.dialog.open(IncorrectPasswordDialogComponent);
  }

  openHintDialog(): void {
    this.dialog.open(HintDialogComponent);
  }
}
