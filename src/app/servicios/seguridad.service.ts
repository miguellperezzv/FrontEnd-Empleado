import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http:HttpClient) { }

  identificar(usuario:string, clave:string):Observable{
    return this.http.post("localhost:3000/identifcar");
  }


}


