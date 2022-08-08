import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
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
=======
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrucelComponent } from './components/carrucel/carrucel.component';
import { MisionyvisionComponent } from './components/misionyvision/misionyvision.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { LaboratoriosComponent } from './components/laboratorios/laboratorios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrucelComponent,
    MisionyvisionComponent,
    FooterComponent,
    InicioComponent,
    DirectivaComponent,
    ProyectosComponent,
    ContactosComponent,
    DepartamentosComponent,
    LaboratoriosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 09ac0ce (Proyecto Página de Inicio FULLEF Versión 2)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
