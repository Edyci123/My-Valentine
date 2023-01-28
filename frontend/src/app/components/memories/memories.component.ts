import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss'],
})
export class MemoriesComponent implements OnInit {
  images = [
    {
      img: 'assets/images/img.jpg',
    },
    {
      img: 'assets/images/img.jpg',
    },
    {
      img: 'assets/images/img.jpg',
    },
    {
      img: 'assets/images/img.jpg',
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
  };

  ngOnInit(): void {}
}
