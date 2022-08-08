import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  directiva: any[] = [
    {
      "name": "Adrian Balseca",
      "img": "../../../assets/img/directiva/cv.jpeg"
    },
    {
      "name": "Fernando Almeida",
      "img": "../../../assets/img/directiva/fernando.jpg"
    },
    {
      "name": "Day  Meyers",
      "img": "../../../assets/img/directiva/andrea.jpg"
    },
    {
      "name": "Aguirre  Ellis",
      "img": "../../../assets/img/directiva/andrea.jpg"
    },
    {
      "name": "Cook  Tyson",
      "img": "../../../assets/img/directiva/andrea.jpg"
    }
  ]
}
