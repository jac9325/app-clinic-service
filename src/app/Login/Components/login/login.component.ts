import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../Services/Login.service';
import { StorageService } from '../../Services/storage.service';


@Component({
  selector: 'login',
  standalone: true,
  imports: [ RouterModule, FormsModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
  
})

export class LoginComponent implements OnInit{
  form: any = {
    username: null,
    password: null
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private loginService: LoginService, private storageService: StorageService) { }
  
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
        const token = data.token;
        this.storageService.saveUser(token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        /*Extraer los roles de usuario */
        /*const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);
        this.roles = decodedToken.authorities;
        console.log(this.roles);*/
        this.roles = this.storageService.getUser().roles;
        console.log(this.roles);
        this.reloadPage();
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
  /* Metodos de proceso */
  
  // onSubmit() {
  //   this.loginServices.login(this.username, this.password)
  //     .subscribe({
  //       next: (response) => {
  //         console.log(response);
  //         if (response.token) {
  //           localStorage.setItem('token', response.token);
  //           this.router.navigate(['/home']);
  //         } else {
  //           this.message = "Error con el token";
  //         }
  //       },
  //       error: (error) => {
  //         console.error(error);
  //         this.message = error.error.message;
  //       },
  //       complete: () => {
  //         // Optional: Handle completion if needed (e.g., cleanup logic)
  //       }
  //     });
  // }  
}