import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent{

  @Input()
  peliculas;

  // removerItem(indice:number):void{
  //   this.peliculas.splice(indice,1);
  // };
}
