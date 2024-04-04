import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoreModule ],
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
