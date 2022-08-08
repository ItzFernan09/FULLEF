import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
=======
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { InicioComponent } from './components/inicio/inicio.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { LaboratoriosComponent } from './components/laboratorios/laboratorios.component';


const routes: Routes = [
  {path:'inicio', component:InicioComponent },
  {path:'',component:InicioComponent},
  {path:'directiva', component:DirectivaComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'contactos', component:ContactosComponent},
  {path:'departamentos', component:DepartamentosComponent},
  {path:'laboratorios',component:LaboratoriosComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],exports: [ RouterModule ]
>>>>>>> 09ac0ce (Proyecto Página de Inicio FULLEF Versión 2)
})
export class AppRoutingModule { }
