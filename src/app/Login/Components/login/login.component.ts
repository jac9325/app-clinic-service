import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../Services/ServicesLogin/Login.service';
import { StorageService } from '../../Services/ServicesLogin/storage.service';
import { UsuarioService } from '../../Services/ServicesUsuario/Usuario.service';

  @Component({
    selector: 'login',
    standalone: true,
    imports: [RouterModule, FormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.sass',
  })

  export class LoginComponent implements OnInit {
    form: any = {
      username: null,
      password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    currentUsername!: string;
    roles: string[] = [];

    constructor(
      private loginService: LoginService, 
      private storageService: StorageService, 
      private usuarioService: UsuarioService) { }

    ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
      }
    }
    onSubmit(): void {
      const { username, password } = this.form;

      this.loginService.login(username, password).subscribe({
        next: data => {
          let token = data.token;
          //quitar comillas al token
          token = token.replace(/^"(.*)"$/, '$1');
          this.storageService.saveUser(token);
          this.isLoginFailed = false;
          this.isLoggedIn = true;

          this.usuarioService.getUserWihtAllRols(data.username).subscribe({
            next: usuarioAndRoles => {
              console.log("llegue hasta aqui");
              console.log(usuarioAndRoles)
              console.log("pase aqui")
            },
            error: err => {
            }
          });
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          console.log(this.isLoginFailed);
        }
      });
    }

    reloadPage(): void {
      window.location.reload();
    }
  };

