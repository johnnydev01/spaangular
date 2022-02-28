import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app-component.service';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'spaangular';



  constructor(private appService: AppComponentService) {

  }

  ngOnInit(): void {
      this. appService.getAllCharacters().subscribe(data => console.log('Data', data))
  }
}
