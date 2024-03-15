import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'visitas',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './visitas.component.html',
  styleUrl: './visitas.component.sass'
})

export class VisitasComponent implements OnInit {
  visitas: number = 0; // Valor por defecto

  constructor() { }

  ngOnInit(): void {
    this.obtenerVisitas();
  }

  // Suponiendo que tienes un método para obtener el número de visitas desde el backend
  obtenerVisitas() {
    // Aquí iría la lógica para obtener el número de visitas del backend
    // Y asignarlo a la variable 'visitas'
    this.visitas = 104; // Esto es solo un ejemplo, deberías reemplazarlo con el valor obtenido del backend
  }
}
