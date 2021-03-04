import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/primeraLetraMayuscula';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router:Router, private formBuilder:FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:['',{
        validators:[Validators.required,Validators.minLength(3),primeraLetraMayuscula()]
      }],
    });
  }

  guardarCambios(){
    //... guardar cambios
    this.router.navigate(['/generos']);
  }

  getErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
      return 'El campo nombre es requerido';
    }
    if (campo.hasError('minlength')){
      return 'La longitud mínima es 3 caracteres';
    }
    if (campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
      //return 'La primera letra debe mayúscula'; 
    }
    return '';
  }
}
