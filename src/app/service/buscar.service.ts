import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../models/usuarios.model';

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

  private tranformarUsuario(respuesta : any[]) : Usuarios[] {
    return respuesta.map(
      (user : any) => new Usuarios(user.nombre,user.email,'',user.img,user.google,user.rol,user.uid) 
    );
  }

  busqueda(tipo : 'usuarios'|'medicos'|'hospitales', termino : string ){
      const url = `${api_url}/todo/coleccion/${tipo}/${termino}`
      return this.http.get<any[]>(url,this.Tokens).pipe(
        map( (resp : any) => { 
          switch (tipo) {
            case 'usuarios':
              return this.tranformarUsuario(resp.resultados)
              break;
          
            default:
              return [];
              break;
          }
          //return resp.resultados
        })
      )
  }
}
