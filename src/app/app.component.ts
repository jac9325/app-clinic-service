import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MainMenuComponent } from './Components/main-menu/main-menu.component';
import { SearchComponent } from './Components/search/search.component';
import { PatientHistoryComponent } from './Components/patient-history/patient-history.component';
import { AlertComponent } from './Components/alert/alert.component';
import { AllergyComponent } from './Components/allergy/allergy.component';
import { AddPatientComponent } from './Components/add-patient/add-patient.component';
import { HabitsComponent } from './Components/habits/habits.component';
import { HistorialClinicoComponent } from './Pages/historial-clinico/historial-clinico.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, MainMenuComponent,
          SearchComponent, PatientHistoryComponent, AllergyComponent,
          AddPatientComponent, HabitsComponent, HistorialClinicoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // propiedades del componente
  title = 'app-clinic-service';
  // Constructor
  constructor(){}

  // Médtodo de inicialización
  ngOnInit():void{

  }
}


// @Component({
// 	selector: 'app-root',
// 	standalone: true,
// 	imports: [NgbDropdownModule],
//   templateUrl: './app.component.html',
// })
// export class NgbdDropdownBasic {}