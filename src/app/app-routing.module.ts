import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';


const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/inicio"
  },
  
  {
    path:'**',
    component:ErrorComponent
  },
  {
    path:'seguridad',
    loadChildren:()=>import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
  },
  {
    path:'empleado',
    loadChildren:()=>import("./modulos/empleado/empleado.module").then(x=>x.EmpleadoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
