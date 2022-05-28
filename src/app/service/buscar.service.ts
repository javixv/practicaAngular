import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

const api_url = environment.urlapi
@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor(private http : HttpClient) { }
  
  get token() : string {
    return localStorage.getItem('token') || '';
  }

  get Tokens(){
    return {
     headers: {
       'x-token': this.token
     }
    }
  }

  busqueda(tipo : 'usuarios'|'medicos'|'hospitales', termino : string ){
      const url = `${api_url}/todo/coleccion/${tipo}/${termino}`
      return this.http.get<any[]>(url,this.Tokens).pipe(
        map( (resp : any) => { return resp.resultados})
      )
  }
}
