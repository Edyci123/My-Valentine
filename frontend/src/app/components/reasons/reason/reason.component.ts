import { Component, Input, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.scss']
})
export class ReasonComponent implements OnInit {
  @Input() myClass!: string;
  @Input() myDataAOS!: string;
  @Input() reason!: string;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
