import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
