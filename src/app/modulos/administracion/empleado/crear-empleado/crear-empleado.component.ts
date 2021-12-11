import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { ErrorComponent } from 'src/app/plantilla/error/error.component';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  fgValidador: FormGroup= this.fb.group({
    'nombre' : ['', [Validators.required]],
    'apellido' : ['', [Validators.required]],
    'correo' : ['', [Validators.required]],
    'telefono' : ['', [Validators.required]],
  })
  constructor(private fb:FormBuilder, 
    private servicioEmpleado:EmpleadoService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }


  GuardarEmpleado(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let apellido = this.fgValidador.controls['apellido'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let telefono = this.fgValidador.controls['telefono'].value;
    let e = new ModeloEmpleado();
    e.nombre = nombre;
    e.apellido = apellido;
    e.correo = correo;
    e.telefono = telefono;
    console.log(nombre);
    console.log(apellido);
    console.log(correo);
    console.log(telefono);

    this.servicioEmpleado.CrearEmpleado(e).subscribe((datos: ModeloEmpleado)=>{
      alert("Almacenado correctamente")
      this.router.navigate(["/administracion/buscar-empleado"])
    }, (error:any) => {
      alert("error almacenando el producto "+error)
      console.error();
    })
  }
}
