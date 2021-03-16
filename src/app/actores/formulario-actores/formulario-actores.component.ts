import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ['',{
          validators: [Validators.required],
        }
    ],
      fechaNacimiento:'',
    });
  }
}
