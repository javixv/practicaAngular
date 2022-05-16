import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public imgUrl = ''
  public usuario! : Usuarios
  constructor( private usuarioService: UsuarioService ) { 
    //this.imgUrl = usuarioService.usuario.imagenUrl
    this.usuario = usuarioService.usuario
  }

  logout() {
    this.usuarioService.logout();
  }

}
