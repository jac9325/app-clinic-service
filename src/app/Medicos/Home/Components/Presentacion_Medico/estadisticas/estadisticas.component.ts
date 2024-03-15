import { Component , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'estadisticas',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.sass'
})


export class EstadisticasComponent implements OnInit {
  nuevosPacientes: number = 0; // Valor por defecto
  porcentajeNuevos: number = 0; // Valor por defecto
  pacientesAntiguos: number = 0; // Valor por defecto
  porcentajeAntiguos: number = 0; // Valor por defecto

  constructor() { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  // Suponiendo que tienes un método para obtener los datos desde el backend
  obtenerDatos() {
    // Aquí iría la lógica para obtener los datos del backend
    // Y asignarlos a las variables correspondientes
    this.nuevosPacientes = 40; // Esto es solo un ejemplo, deberías reemplazarlo con el valor obtenido del backend
    this.porcentajeNuevos = 51; // Esto es solo un ejemplo, deberías reemplazarlo con el valor obtenido del backend
    this.pacientesAntiguos = 64; // Esto es solo un ejemplo, deberías reemplazarlo con el valor obtenido del backend
    this.porcentajeAntiguos = 20; // Esto es solo un ejemplo, deberías reemplazarlo con el valor obtenido del backend
  }
}
