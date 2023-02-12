import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss'],
})
export class MemoriesComponent implements OnInit {
  slides = [{ img: '../../../assets/images/img1.jpg' }];

  slideConfig = { slidesToShow: 1, slidesToScroll: 1, centerMode: true, adaptiveHeight: true, infinite: true };
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  ngOnInit(): void {
    for (let i = 2; i <= 14; i++) {
      this.slides.push({ img: '../../../assets/images/img' + i + '.jpg' });
    }
  }
}
