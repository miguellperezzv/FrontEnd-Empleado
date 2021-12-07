import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleado/eliminar-empleado/eliminar-empleado.component';


const routes: Routes = [
  
  {
    path: 'crear-empleado',
  component:CrearEmpleadoComponent
  },
  {
    path: 'editar-empleado',
    component:EditarEmpleadoComponent
  },
  {
    path: 'eliminar-empleado',
    component:EliminarEmpleadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
