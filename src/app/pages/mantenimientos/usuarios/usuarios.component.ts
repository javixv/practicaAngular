import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios.model';
import { BuscarService } from 'src/app/service/buscar.service';
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
  public cargando : boolean = true;

  constructor(private usuariosServecie : UsuarioService,
              private busquedaService : BuscarService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
   }

   cargarUsuarios(){
    this.usuariosServecie.obtenerUsuarios(this.desde).subscribe(resp => {
      console.log(resp)
      this.totalUsuarios = resp.total;
      this.usuarios = resp.usuarios;
      this.cargando = false;
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

   buscar( termino : string){
     this.busquedaService.busqueda('usuarios',termino).subscribe( resp => {
       //console.log(resp)
       this.usuarios = resp;
     })

   }

}
