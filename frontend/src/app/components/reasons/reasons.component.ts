import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss'],
})
export class ReasonsComponent implements OnInit {
  reasons: string[] = [
    'You are always there for me, if I need support or anything else you are the one that I am sure will give them to me',
    'You are the one that always tries to make me a better person',
    'You make me ambitious',
    'You help me see the more adventurous part of life',
    'You are sooo smart, it is so sexxxyyy',
    'You set my goals in life',
    'You are so sincere with me, and I can always trust your opnion',
    'You can always make me smile, with the smallest gestures, because they have an exponential power (not with a base smaller than 1 -_-)',
    'You put a spell on me and you know it',
    'You enhance me with the power to go further',
    'You give me style',
    'You make me feel proud',
    'You and me are a power couple, which is so hot',
    'You are so random, you do things that I would never see coming',
    'You know how to listen to my problems, and empathise with them',
    'You can turn me on just by looking at me',
    'You are so cuteee, I cannot describe it in words',
    'You make it all go away when we are together, you are my safe place',
    'You are such a talented singer',
    'You care so much about me and about my needs',
    'You are ferocious',
    'You the center of my universe, I have been orbiting around you ever sincer we met',
    'You are the one that brings me joy in life and makes every moment of my existence worth it and full of emotions',
    'You changed my view on the world',
    'You make me miss you the moment I leave your place',
    'You are always right',
    'You are so competitve, just like me, and that makes us work so well together',
    'You are absolutly astonishing, i just cannot take my eyes off you',
    'You are driven to accomplish your goals',
    'You are an independent woman',
    'You make the time fly, when you are around',
    'You have great taste in food and I enjoy every meal with you',
    'You have some little powerful puminsori',
    'You make my life a happy place. You are the best thing that ever happend to me. I would spend a lifetime with you and never get bored. I truly belive that you are the love of my life. ALINA FLOREA TE IUBESC!!!',
  ];

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }

  getClass(i: number): string {
    return i % 2 ? 'container-right' : 'container-left';
  }
}
