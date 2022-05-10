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
  public loginForm = this.fb.group({
    email     : ['test100@localhost.com', Validators.required],
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
      console.log(resp)
    },err => {
      Swal.fire('Error', err.error.msj,'error' )
     })
    // this.router.navigateByUrl('/');
  }
  
}
