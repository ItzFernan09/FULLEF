import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Proyectos: any[] = [
    {
      "name": "Intercolegial de San Valentin",
      "img": "../../../assets/img/intercolegial/san valentin.jpg",
      "descripcion":"",
      "link":"https://intercolegialue.com/index.php/intercolegial-de-navidad/"

    },
    {
      "name": "Intercolegial de Navidad",
      "img": "../../../assets/img/intercolegial/navidad.jpg",
      "descripcion":""
    },
  ]
}
