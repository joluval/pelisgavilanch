import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(){
    alert("Grabado con éxito");
  }
}
