import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {nombre:"Spiderman",
        fechaLanzamiento: new Date(),
        precio:10.80, 
        imagen: "https://media.istockphoto.com/photos/cosplayer-dressed-as-spiderman-from-marvel-picture-id619272790?s=612x612"},
        {nombre:"Titanic",
        fechaLanzamiento: new Date(),
        precio:19.99,
        imagen: "https://media.istockphoto.com/photos/titanic-and-iceberg-picture-id503132519"},
        {nombre:"Terminator",
        fechaLanzamiento: new Date(),
        precio:9.99,
        imagen: "https://media.istockphoto.com/photos/terminator-schwarzenegger-picture-id500595300?s=612x612"},
        {nombre:"Rambo",
        fechaLanzamiento: new Date(),
        precio:14.99,
        imagen: "https://static1.abc.es/media/play/2019/08/28/stallone-rambo-1-3-kp3E--620x349@abc.jpg",
        }
      ]
    }, 1000);
  }
  peliculasEnCines;
  title = "El valor que yo quiera";
  peliculasEstreno = [];
  ocultar = false;

  manejarVoto(voto:number):void{
    alert(voto);
  }

}
