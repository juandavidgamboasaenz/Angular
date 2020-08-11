/* SERVICIO DE INTERFAZ CON JSON REST API*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER = "https://pruebasasivamosffiebackend.ivolucion.com/api/common/ListDepartamento";

  constructor(private httpClient: HttpClient) { }

  /** Metodo para lidiar con errores */

  handleError(error: HttpErrorResponse){
    let errorMessage = 'Unknown error!';
    if(error.error instanceof ErrorEvent){
      //Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

   /** Metodo que invoca el metodo Get de httpClient para enviar request al servidor REST API */

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
