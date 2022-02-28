import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CharactersRoutingModule } from './characters-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    CharactersComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    MatCardModule
  ]
})
export class CharactersModule { }
