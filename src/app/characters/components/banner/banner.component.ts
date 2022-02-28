import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';

  constructor() { }


  ngOnInit(): void {
  }

}
