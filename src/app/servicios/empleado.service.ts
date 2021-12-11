import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloEmpleado } from '../modelos/empleado.modelo';
import { SeguridadModule } from '../modulos/seguridad/seguridad.module';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = 'http://localhost:3000';
  token:string = "";
  constructor(private http:HttpClient, private seguridadServicio:SeguridadService) { 
    this.token= this.seguridadServicio.ObtenerToken();
  }

  ObtenerEmpleados():Observable<ModeloEmpleado[]>{
  return this.http.get<ModeloEmpleado[]>(`${this.url}/empleados`); 
  }

  ObtenerEmpleadoPorId(id:string):Observable<ModeloEmpleado>{
    return this.http.get<ModeloEmpleado>(`${this.url}/empleados/${id}`); 
    }

  CrearEmpleado(empleado:ModeloEmpleado){
    return this.http.post<ModeloEmpleado>(`${this.url}/empleados`,empleado, {
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  ActualizarEmpleado(empleado:ModeloEmpleado){
    return this.http.put<ModeloEmpleado>(`${this.url}/empleados`,empleado, {
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  EliminarEmpleado(id:String):Observable<any>{
    return this.http.delete(`${this.url}/empleados/${id}`,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  
}
