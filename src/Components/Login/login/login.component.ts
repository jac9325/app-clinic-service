import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'login',
  standalone: true,
  imports: [ FontAwesomeModule , RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})

export class LoginComponent{
  
}