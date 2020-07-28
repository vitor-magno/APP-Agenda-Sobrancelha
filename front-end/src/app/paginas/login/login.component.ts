import { Component, OnInit,Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { LoginService } from '../../services/login.services';
import { Routes, RouterModule } from '@angular/router'; 
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
 
  formularioDeUsuario: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.criarFormularioDeUsuario();
  }

  async enviarDados() {
    const dadosFormulario = this.formularioDeUsuario.value;
    const credentials = {
      Login: dadosFormulario.Login,
      Senha: dadosFormulario.Senha
    };
    const resposta = await  this.loginService.login(credentials)

    if (resposta === 'administrador')
    
    await this.router.navigate(['/home']);
  
    else
    this.router.navigate(['/fazer-checklist'])
    this.formularioDeUsuario.reset();
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group({
      Login: ['', Validators.compose([Validators.required])],
      Senha: ['', Validators.compose([Validators.required])]
    },
    );
  }

  get Login() {
    return this.formularioDeUsuario.get('Login');
  }

  get Senha() {
    return this.formularioDeUsuario.get('Senha');
  }

  // snackBarSucess() {
  //   const x = document.getElementById('sucess');
  //   x.className = 'show';
  //   setTimeout(function () { x.className = x.className.replace('show', ''); }, 3000);
  // }

  // snackBarFailure() {
  //   const x = document.getElementById('failure');
  //   x.className = 'show';
  //   setTimeout(function () { x.className = x.className.replace('show', ''); }, 3000);
  // }

}

