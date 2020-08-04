/* SERVICIO DE INTERFAZ CON JSON REST API*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER = "https://pruebasasivamosffiebackend.ivolucion.com/api/common/ListDepartamento";

  constructor(private httpClient: HttpClient) { }

   /** Metodo que invoca el metodo Get de httpClient para enviar request al servidor REST API */

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
