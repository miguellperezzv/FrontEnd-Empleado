import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarEmpleadoComponent } from './empleado/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleado/eliminar-empleado/eliminar-empleado.component';


const routes: Routes = [
  
  {
    path: 'crear-empleado',
  component:CrearEmpleadoComponent,
  canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'editar-empleado/:id',
    component:EditarEmpleadoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'eliminar-empleado',
    component:EliminarEmpleadoComponent,
    canActivate:[ValidadorSesionGuard]
  },

  {
    path: 'buscar-empleado',
    component:BuscarEmpleadoComponent,
    canActivate:[ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
