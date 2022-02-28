import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'spa-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private charactersService: CharactersService) { }

  characters: any;

  ngOnInit(): void {
    this.getAllChararcters();
  }

  getAllChararcters() {
    this. charactersService.getAllCharacters().subscribe(characters => this.characters = characters.data.results);
  }

}
