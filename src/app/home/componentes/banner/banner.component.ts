import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  images: string[] =[
    'assets/banner/banner-1.jpg',
    'assets/banner/banner-2.jpg',
    'assets/banner/banner-3.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
