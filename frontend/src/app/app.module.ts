import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './components/login/login.component';
import { IncorrectPasswordDialogComponent } from './components/login/incorrect-password-dialog/incorrect-password-dialog.component';
import { HintDialogComponent } from './components/login/hint-dialog/hint-dialog.component';
import { MemoriesComponent } from './components/memories/memories.component';
import { ReasonsComponent } from './components/reasons/reasons.component';
import { ReasonComponent } from './components/reasons/reason/reason.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    IncorrectPasswordDialogComponent,
    HintDialogComponent,
    MemoriesComponent,
    ReasonsComponent,
    ReasonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SlickCarouselModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
