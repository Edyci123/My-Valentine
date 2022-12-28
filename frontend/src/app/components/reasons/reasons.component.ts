import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss'],
})
export class ReasonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init()
  }
}
