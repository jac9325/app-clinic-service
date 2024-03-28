import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  isCollapsed = true;
  title:string = 'app-clinic-service';
  roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showColaboratorBoard = false;
  showMecicalBoard = false;
  username?:string;
}
