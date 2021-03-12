import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private location:Location,
    private activedRoute:ActivatedRoute) { }

  form: FormGroup;

  generos = [
    {id:1, nombre:'Acción'},
    {id:2, nombre:'Drama'},
    {id:3, nombre:'Comedia'},
  ];

  peliculas = [
    {peliculaId:1, nombre:'Titanic', generoId:[2], proximosEstrenos:true, enCines:true, imagen: 'https://media.istockphoto.com/photos/titanic-and-iceberg-picture-id503132519'},
    {peliculaId:1, nombre:'Spider-man', generoId:[1], proximosEstrenos:true, enCines:false, imagen: 'https://media.istockphoto.com/photos/cosplayer-dressed-as-spiderman-from-marvel-picture-id619272790?s=612x612'},
    {peliculaId:1, nombre:'Rambo', generoId:[1,3], proximosEstrenos:false, enCines:false, imagen: 'https://static1.abc.es/media/play/2019/08/28/stallone-rambo-1-3-kp3E--620x349@abc.jpg'},
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    nombre: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };
  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPelicula(this.form.value);

    this.form.valueChanges.subscribe(valores => {
        //console.log(valores);
        this.peliculas = this.peliculasOriginal;
        this.buscarPelicula(valores);
        this.escribirParametrosBusquedaURL();
      });
  }
  
  private leerValoresURL(){
    this.activedRoute.queryParams.subscribe((params)=>{
      var objeto:any = {};
      if (params.nombre){
        objeto.nombre = params.nombre;
      }
      if (params.generoId){
        objeto.generoId = Number(params.generoId);
      }
      if (params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if (params.enCines){
        objeto.enCines = params.enCines;
      }
      this.form.patchValue(objeto);

    });
  }

  private escribirParametrosBusquedaURL(){
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if (valoresFormulario.nombre){
      queryStrings.push(`nombre=${valoresFormulario.nombre}`);
    }

    if (valoresFormulario.generoId !== 0){
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }

    if (valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if (valoresFormulario.enCines){
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar',queryStrings.join('&'));
  };

  buscarPelicula(valores: any){
    if (valores.nombre){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.nombre.indexOf(valores.nombre) !== -1);
    }
    if (valores.generoId){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generoId.indexOf(valores.generoId) !== -1);
    }
    if (valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if (valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }
}
