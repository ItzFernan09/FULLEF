import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Angular Material
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezeraComponent } from './cabezera/cabezera.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//AngularCarrucel
import { NgImageSliderModule } from 'ng-image-slider';


import { NosotrosComponent } from './nosotros/nosotros.component';
import { CarrucelComponent } from './carrucel/carrucel.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
      CabezeraComponent,
      NosotrosComponent,
      CarrucelComponent,
      CardsComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    NgImageSliderModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
