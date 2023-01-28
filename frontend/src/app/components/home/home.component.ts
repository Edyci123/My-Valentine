import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  code: number = 0;
  date: any;

  constructor(
    private router: Router,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {}

  @HostListener('document: keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key >= '0' && event.key <= '9') {
      let num: number = +event.key;
      this.code = (this.code * 10 + num) % 100;
      if (this.code === 29) {
        this.router.navigate(['/memories']);
      } else if (this.code === 13) {
        this.router.navigate(['/reasons']);
      }
    }
  }

  onClickMemories(): void {
    this.router.navigate(['/memories']);
  }

  onClickReasons(): void {
    this.router.navigate(['/reasons']);
  }

  onChange(value: Date): void {
    let date = formatDate(value, 'yyyy-MM-dd', 'en-US');
    if (date === '2019-09-13') {
      this.router.navigate(['/reasons']);
    } else if (date === '2022-07-29') {
      this.router.navigate(['/memories']);
    }
  }
}
