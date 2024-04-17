import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCitasHoy } from '../../../../../States/Cita/cita.selector';
import { AppState } from '../../../../../States/app.state';


@Component({
  selector: 'visitas',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './visitas.component.html',
  styleUrl: './visitas.component.sass'
})

export class VisitasComponent implements OnInit {
  visitas: number = 0; // Valor por defecto

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.obtenerVisitas();
  }

  // Suponiendo que tienes un método para obtener el número de visitas desde el backend
  obtenerVisitas() {
    this.store.select(selectCitasHoy).subscribe(item => {
      this.visitas = item;
    }); // Esto es solo un ejemplo, deberías reemplazarlo con el valor obtenido del backend
  }
}
