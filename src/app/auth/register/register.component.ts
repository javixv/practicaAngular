import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls : [ './register.component.css'
  ]
})
export class RegisterComponent {

  public formSubmmit = false;
  public registerForm = this.fb.group({

    nombre    : ['AdminPro', Validators.required],
    email     : ['test100@localhost.com', Validators.required],
    password  : ['123456', Validators.required],
    password2 : ['123456', Validators.required],
    terminos  : [false,Validators.required]
  },
  // {
  //   validators : this.passwordIguales('password','password2')
  // }
  )

  constructor(private fb : FormBuilder,
    private usuarioService : UsuarioService) { }

  crearUsuario(){
    this.formSubmmit = true;
    console.log(this.registerForm.value)

    if(this.registerForm.invalid){
      console.log(this.registerForm.invalid)
      return 
    }

    this.usuarioService.crearUsuario(this.registerForm.value).subscribe( resp => {
      console.log('usuario creado')
      console.log(resp)
    },err => {console.log(err.error.msj)
     Swal.fire('Error', err.error.msj,'error' )
    })
  }

  validarCampo(campo : string) : boolean {

    if(this.registerForm.get(campo)?.invalid && this.formSubmmit == true){
      return true
    }else{      
      return false
    }
  }

  contraseniasNovaldias(){
    const pass1 = this.registerForm.get('password')?.value
    const pass2 = this.registerForm.get('password2')?.value

    if(pass1 === pass2){
      return false
    }else{
      return true;
    }
  }

  passwordIguales(pass1Name : string, pass2Name : string){
    return (formGroup : FormGroup) => {

      const pass1 = formGroup.get(pass1Name);
      const pass2 = formGroup.get(pass2Name);

      if(pass1 === pass2){
        pass2?.setErrors(null)
      }else {
        pass2?.setErrors({noEsIgual : true})
      }

    }
  }

}
