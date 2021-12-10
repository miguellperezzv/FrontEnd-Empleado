import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  

  url = "http://localhost:3000";
  datosUsuarioenSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());
  constructor(private http:HttpClient) {

    this.VerificarSesionActual();
   }

  AlmacenarSesion(datos: ModeloIdentificar) {

    datos.identificado=true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString  = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  RefrescarDatosSesion(datos:ModeloIdentificar){
    this.datosUsuarioenSesion.next(datos);
  }

  ObtenerDatosUsuarioSesion(){
    return this.datosUsuarioenSesion.asObservable();
  }

  EliminarSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  seHaIniciadoSesion(){
    let datosString  = localStorage.getItem("datosSesion");
    return datosString;
  }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if (datos){
      this.RefrescarDatosSesion(datos);
    }
  }


  identificar(usuario:string, clave:string):Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarEmpleado`,
      {
        usuario:usuario,
        clave:clave
      },
      {
        headers: new HttpHeaders({

        })
      }
    );
  }


}


