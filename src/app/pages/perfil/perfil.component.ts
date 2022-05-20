import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  public perfilForm! : FormGroup
  constructor(private fb : FormBuilder,private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre : ['nombrte', Validators.required],
      email : ['email', [Validators.required, Validators.email]]
    })

  }

  guardarperfil(){
    console.log(this.perfilForm.value)
    this.usuarioService.actualizarPerfil(this.perfilForm.value).subscribe(resp => {
      console.log(resp)
    })
  }
  
}
