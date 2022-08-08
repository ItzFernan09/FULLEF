import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  departamentos:any[] =[
    {
      "name":"Sistemas",
      "imagen":"https://images.pexels.com/photos/3747473/pexels-photo-3747473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "descripcion":"aqui viene una decripcion",
      "link":""
    },
    {
      "name":"RRHH",
      "imagen":"https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "descripcion":"aqui viene una decripcion",
      "link":""
    },
    {
      "name":"Comunicación",
      "imagen":"https://images.pexels.com/photos/8133855/pexels-photo-8133855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "descripcion":"aqui viene una decripcion",
      "link":""
    },
    {
      "name":"Secretaría",
      "imagen":"https://images.pexels.com/photos/12899095/pexels-photo-12899095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "descripcion":"aqui viene una decripcion",
      "link":""
    },
    {
      "name":"Producción de Eventos",
      "imagen":"https://images.pexels.com/photos/4889281/pexels-photo-4889281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "descripcion":"aqui viene una decripcion",
      "link":""
    },
    {
      "name":"Legal",
      "imagen":"https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "descripcion":"aqui viene una decripcion",
      "link":""
    },
    {
      "name":"Consejos estudiantiles",
      "imagen":"https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "descripcion":"aqui viene una decripcion",
      "link":""
    },
    {
      "name":"Organizaciones",
      "imagen":"https://images.pexels.com/photos/3747473/pexels-photo-3747473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "descripcion":"aqui viene una decripcion",
      "link":""
    },
    {
      "name":"Gabinetes",
      "imagen":"https://images.pexels.com/photos/3747473/pexels-photo-3747473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "descripcion":"aqui viene una decripcion",
      "link":""
    }
  ]
}
