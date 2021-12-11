import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  id:string=""

  fgValidador: FormGroup= this.fb.group({
    'id' : ['', [Validators.required]],
    'nombre' : ['', [Validators.required]],
    'apellido' : ['', [Validators.required]],
    'correo' : ['', [Validators.required]],
    'telefono' : ['', [Validators.required]],
  })
  constructor(private fb:FormBuilder, 
    private servicioEmpleado:EmpleadoService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.BuscarEmpleado();
  }

  BuscarEmpleado(){
    this.servicioEmpleado.ObtenerEmpleadoPorId(this.id).subscribe((datos:ModeloEmpleado)=>
    {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
    }
    );
  }

  EditarEmpleado(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let apellido = this.fgValidador.controls['apellido'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let telefono = this.fgValidador.controls['telefono'].value;
    let e = new ModeloEmpleado();
    e.nombre = nombre;
    e.apellido = apellido;
    e.correo = correo;
    e.telefono = telefono;
    e.id = this.id;

    this.servicioEmpleado.ActualizarEmpleado(e).subscribe((datos: ModeloEmpleado)=>{
      alert("Actualizado correctamente")
      this.router.navigate(["/administracion/buscar-empleado"])
    }, (error:any) => {
      alert("error almacenando el producto "+error)
      console.error();
    })
  }

}
