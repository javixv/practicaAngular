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
  public desde : number = 0;
  constructor(private usuariosServecie : UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
   }

   cargarUsuarios(){
    this.usuariosServecie.obtenerUsuarios(this.desde).subscribe(resp => {
      console.log(resp)
      this.totalUsuarios = resp.total;
      this.usuarios = resp.usuarios;
    })
   }

   paginarUsuarios(valor : number){
     this.desde += valor;

     if(this.desde < 0){this.desde = 0;}
     else if(this.desde > this.totalUsuarios){
       this.desde -= valor;
     }
    this.cargarUsuarios();
   }

}
