import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios.model';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  public perfilForm! : FormGroup
  public usuario! : Usuarios

  constructor(private fb : FormBuilder,private usuarioService : UsuarioService) { 
    this.usuario = this.usuarioService.usuario
  }


  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre : [this.usuario.nombre, Validators.required],
      email : [this.usuario.email, [Validators.required, Validators.email]]
    })

  }

  guardarperfil(){
    console.log(this.perfilForm.value)
    this.usuarioService.actualizarPerfil(this.perfilForm.value).subscribe(resp => {
      const {nombre, email} = this.perfilForm.value
      this.usuario.nombre = nombre
      this.usuario.email = email
      console.log(resp)
    })
  }
  
}
