import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  url_api = environment.urlapi
  public auth2: any;

  constructor( private http: HttpClient, 
                private router: Router,
                private ngZone: NgZone ) {

    //this.googleInit();
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
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ this.url_api }/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token );
      }),
      map( resp => true),
      catchError( error => of(false) )
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
}
