import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './eliminar-empleado/eliminar-empleado.component';

const routes: Routes = [
  {
    path: 'crear-empleado',
  component:CrearEmpleadoComponent,
  },
  {
    path: 'editar-empleado',
    component:EditarEmpleadoComponent,
  },
  {
    path: 'eliminar-empleado',
    component:EliminarEmpleadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
