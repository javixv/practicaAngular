import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  url_api = environment.urlapi
  
  constructor(private http : HttpClient) { }

  crearUsuario(formData : any){
    return this.http.post(this.url_api +'/usuarios',formData)
  }
}
