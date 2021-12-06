import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './eliminar-empleado/eliminar-empleado.component';
import { BuscarEmpleadoComponent } from './buscar-empleado/buscar-empleado.component';


@NgModule({
  declarations: [
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    EliminarEmpleadoComponent,
    BuscarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule
  ]
})
export class EmpleadoModule { }
