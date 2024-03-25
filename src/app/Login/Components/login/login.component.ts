import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioCredenciales } from '../../Models/Dto/UsuarioCredenciales';
import { LoginServices } from '../../Services/Login.services';



@Component({
  selector: 'login',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})

export class LoginComponent{
  usuarioCredenciales: UsuarioCredenciales = new UsuarioCredenciales();
  constructor(private loginServices: LoginServices) {}

  /* Metodos de proceso */
  onSubmit(email: string, password: string) {
    this.loginServices.loginByEmail(email, password){
      const credentials: UsuarioCredenciales = {
        emailAccess: email,
        passwordAccess: password,
      }
    };
    this.loginServices.loginByEmail(credentials).subscribe(
      (response) => {
        // Manejar la respuesta exitosa (por ejemplo, almacenar el token)
        console.log('Inicio de sesión exitoso:', response);
      },
      (error) => {
        // Manejar el error (por ejemplo, mostrar un mensaje de error)
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}