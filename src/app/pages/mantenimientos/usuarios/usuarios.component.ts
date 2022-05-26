import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public totalUsuarios! : number;
  public usuarios : Usuarios[]= []

  constructor(private usuariosServecie : UsuarioService) { }

  ngOnInit(): void {
    this.usuariosServecie.obtenerUsuarios().subscribe(resp => {
      console.log(resp)
      this.totalUsuarios = resp.total;
      this.usuarios = resp.usuarios;
    })
   }

}
