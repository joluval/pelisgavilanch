import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  marcador: EventEmitter<number>=new EventEmitter<number>();

  maximoRatingArr = [];
  votado = false;
  ratingAnterior;

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }
  //cuando se pasa el mouse
  manejarMouseEnter(index: number):void{
    this.ratingSeleccionado = index +1;
  }
  // cuando se quita mouse
  manejarMouseLeave(){
    if(this.ratingSeleccionado !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingSeleccionado = 0;
    }
  }
  seleccionarRate(index:number):void{
    this.ratingSeleccionado=index + 1;
    this.votado=true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.marcador.emit(this.ratingSeleccionado);
  }
}
