import { Component, OnInit } from '@angular/core';
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

  constructor(private sidebarservice : SidebarService,private usuarioService: UsuarioService) { 

    this.menuItems = sidebarservice.menu;
    console.log(this.menuItems)
  }

  ngOnInit(): void {
  }

  logout() {
    this.usuarioService.logout();
  }

}
