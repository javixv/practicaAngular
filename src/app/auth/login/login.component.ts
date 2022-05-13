import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls : [ './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public formSubmmit = false;
  public auth2: any;
  
  public loginForm = this.fb.group({
    email     : [ localStorage.getItem('email') || '', Validators.required],
    password  : ['123456', Validators.required],
    remember  : [false]    
  }
  )

  constructor(private router: Router,
            private fb : FormBuilder
            ,private usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }

  login() {
    ///console.log(this.loginForm.value)
    this.usuarioService.login(this.loginForm.value).subscribe(resp => {
      if(this.loginForm.get('remember')?.value){
        localStorage.setItem('email', this.loginForm.get('email')?.value)
      }else {
        localStorage.removeItem('email')
      }

       // Navegar al Dashboard
       this.router.navigateByUrl('/');

    },err => {
      Swal.fire('Error', err.error.msj,'error' )
     })
    
  }
  
}
