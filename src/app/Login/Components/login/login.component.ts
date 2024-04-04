import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RolesSend, UsuarioAndRoles } from '../../../Models/Usuario/UsuarioAndRoles';
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
      private usuarioAndRoles: UsuarioAndRoles,
      private usuarioService: UsuarioService,
      private router: Router
      ) { }

    ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
      }
    }
    /* -- logearse -- */
    onSubmit(): void {
      const { username, password } = this.form;

      this.loginService.login(username, password).subscribe({
        next: data => {
          let token = data.token;
          //quitar comillas al token
          token = token.replace(/^"(.*)"$/, '$1');

          //-- se guarda el token en el sessionStorage
          this.storageService.saveUser(token);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          
          //-- como la sesion es exitosa se procede a buscar el usuario por el username
          this.usuarioService.getUserWihtAllRols(data.username).subscribe({
            next: (data: any) => {

              if (data.status == 200) {
                this.usuarioAndRoles = data.data;
                console.log(data.data);
                this.router.navigate(['']);
                this.handleDashBoard(data.data.rolesSend);

              } else {
                // El status no es 200
                this.errorMessage = data.message;
              }
            },

            error: err => {
              console.error("Ocurrió un error al obtener los roles del usuario:", err);
              
            }
          });
          
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          console.log(this.isLoginFailed);
        }
        
        }
      })
    };

    handleDashBoard(roles: RolesSend): void{
    }

    reloadPage(): void {
      window.location.reload();
    }
  };

