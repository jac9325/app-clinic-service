import { Component } from '@angular/core';
import { SearchComponent } from '../../Components/search/search.component';
import { SidebarComponent } from '../../Components/sidebar/sidebar.component';
import { MainMenuComponent } from '../../Components/main-menu/main-menu.component';
import { PatientHistoryComponent } from '../../Components/patient-history/patient-history.component';
import { AllergyComponent } from '../../Components/allergy/allergy.component';
import { AlertComponent } from '../../Components/alert/alert.component';

@Component({
  selector: 'app-historial-clinico',
  standalone: true,
  imports:[SidebarComponent, MainMenuComponent,
    SearchComponent, PatientHistoryComponent, AllergyComponent, AlertComponent],
  templateUrl: './historial-clinico.component.html',
  styleUrl: './historial-clinico.component.sass'
})
export class HistorialClinicoComponent {

}
