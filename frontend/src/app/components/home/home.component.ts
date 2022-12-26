import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  private code: number = 0;
  isMobile: boolean = false;

  constructor(private router: Router, public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe(state => {
        this.isMobile = state.matches;
        console.log(state.matches);
      })
  }

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

}
