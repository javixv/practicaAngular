import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios.model';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  public perfilForm! : FormGroup
  public usuario! : Usuarios
  public imagenSubir!: File;
  public imgTemp: any = null;

  constructor(private fb : FormBuilder,private usuarioService : UsuarioService
    ,private uploadservice : FileUploadService
    ) { 
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
      Swal.fire('Guardado', 'Cambios fueron guardados', 'success');
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
    });
  }

  imagenasubir! : File
  cargarImg(event : any){
    console.log(event.target.files[0])
    this.imagenasubir = event.target.files[0]

    if ( !this.imagenasubir) { 
      return this.imgTemp = null;
    }

    const reader = new FileReader();
    reader.readAsDataURL( this.imagenasubir );

    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }
    return true;
  }

  subirImg(){
    this.uploadservice.actulizarfoto(this.imagenasubir,'usuarios',this.usuario.uid!)
    .then(img => {this.usuario.img = img
      Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success');
    }).catch( err => {
      console.log(err);
      Swal.fire('Error', 'No se pudo subir la imagen', 'error');
    })
  }
  
}
