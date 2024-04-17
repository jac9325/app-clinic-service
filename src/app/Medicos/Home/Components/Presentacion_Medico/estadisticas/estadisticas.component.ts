import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCitasAntiguas, selectCitasHoy, selectCitasNuevos } from '../../../../../States/Cita/cita.selector';
import { AppState } from '../../../../../States/app.state';



@Component({
  selector: 'estadisticas',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.sass'
})


export class EstadisticasComponent implements OnInit {
  nuevosPacientes: number = 0; // Valor por defecto
  antiguosPacientes:number = 0;
  hoyPacientes: number = 0;

  porcentajeNuevos: number = 0; // Valor por defecto
  pacientesAntiguos: number = 0; // Valor por defecto
  porcentajeAntiguos: number = 0; // Valor por defecto

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  // Suponiendo que tienes un método para obtener los datos desde el backend
  obtenerDatos() {
    this.store.select(selectCitasAntiguas).subscribe(item => {
      this.antiguosPacientes = item;
    });

    this.store.select(selectCitasHoy).subscribe(item => {
      this.hoyPacientes = item;
    });

    this.store.select(selectCitasNuevos).subscribe(item => {
      this.nuevosPacientes = item;
    });
  }
}
