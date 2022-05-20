import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';
import { Usuarios } from '../models/usuarios.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  url_api = environment.urlapi
  public auth2: any;
  public usuario! : Usuarios

  constructor( private http: HttpClient, 
                private router: Router,
                private ngZone: NgZone ) {

    //this.googleInit();
  }

  get token() : string {
    return localStorage.getItem('token') || '';
  }

  get uid() : string {
    return this.usuario.uid || '';
  }

  logout() {
    localStorage.removeItem('token');

    //this.auth2.signOut().then(() => {

      //this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      //})
    //});

  }

  validarToken(): Observable<boolean> {
    // console.log('entro a validar el token')
    // const token = localStorage.getItem('token') || '';

    return this.http.get(`${ this.url_api }/login/renew`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      tap( (resp: any) => {
        console.log(resp)
        const {nombre,email,img,google,rol,uid } = resp.usuario
        this.usuario = new Usuarios(nombre,email,'',img,google,rol,uid)        
        
        localStorage.setItem('token', resp.token );
      }),
      map( resp => true),
      catchError( error => {
        console.log(error)
        return of(false)} )
    );

  }

  crearUsuario(formData : any){
    return this.http.post(this.url_api +'/usuarios',formData).pipe(tap( ( resp : any) => {
      localStorage.setItem('token', resp.token)
    }))
  }

  login(formData : any){
    return this.http.post(this.url_api +'/login',formData).pipe(tap( ( resp : any) => {
      localStorage.setItem('token', resp.token)
    }))
  }

  actualizarPerfil(data : {email : string, nombre : string,role ?:string}) {
    data = {
      ...data,
      role : this.usuario.role
    }
    return this.http.put(this.url_api +'/usuarios/'+this.uid ,data,{
      headers: {
        'x-token': this.token
      }
    })
  }
}
