import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios.model';
import { SidebarService } from 'src/app/service/sidebar.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  //public imgUrl = ''
  public usuario! : Usuarios
  constructor(private sidebarservice : SidebarService,private usuarioService: UsuarioService) { 

    this.menuItems = sidebarservice.menu;
    //console.log(this.menuItems)
    //this.imgUrl = usuarioService.usuario.imagenUrl
    this.usuario = usuarioService.usuario
  }

  ngOnInit(): void {
  }

  logout() {
    this.usuarioService.logout();
  }

}
