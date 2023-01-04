import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss'],
})
export class ReasonsComponent implements OnInit {

  reasons: string[] = [
    'reason1',
    'reason2',
    'reason3',
    'reason4',
    'reason5',
    'reason6',
    'reason7',
    'reason8',
    'reason9',
    'reason10',
    'reason11',
    'reason12',
    'reason13',
    'reason14',
    'reason15',
    'reason16',
    'reason17',
    'reason18',
    'reason19',
    'reason20'
  ];

  constructor() {}

  ngOnInit(): void {
    AOS.init()
  }

  getClass(i: number): string {
      return i % 2 ? 'container-right' : 'container-left';
  }
}
