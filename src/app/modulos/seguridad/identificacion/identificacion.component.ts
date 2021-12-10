import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const cryptoJS = require("crypto-js");

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {


  fgValidador: FormGroup = this.fb.group({
    'usuario': ['',[Validators.required, Validators.email]],
    'clave': ['',[Validators.required ]]
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }

  identificarEmpleado(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave) ;
    alert(usuario)
    alert(clave)

  }

}
