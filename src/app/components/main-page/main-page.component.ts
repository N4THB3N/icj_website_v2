import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [NgbCarouselConfig]
})

export class MainPageComponent implements OnInit {

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1850/500`);  

  // images = [
  //   'assets/landscape.jpg',
  //   'assets/paisaje.jpg',
  //   'assets/mountains.jpg',
  //   'assets/jesus.jpg'
  // ]

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;    

  }

  ngOnInit(): void {
  }

}
