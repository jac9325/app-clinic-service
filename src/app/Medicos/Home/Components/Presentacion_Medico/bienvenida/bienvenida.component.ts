import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'bienvenida',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.sass'
})
export class BienvenidaComponent {
  nombre: string = 'Doctor!'; // Valor por defecto
  saludo: string = 'Buenos días'; // Valor por defecto

  constructor() {
    this.actualizarSaludo();
  }

  // Método para actualizar el saludo en función de la hora del día
  actualizarSaludo() {
    const hora = new Date().getHours();
    if (hora < 12) {
      this.saludo = 'Buenos días';
    } else if (hora < 18) {
      this.saludo = 'Buenas tardes';
    } else {
      this.saludo = 'Buenas noches';
    }
  }

  // Suponiendo que tienes un método para obtener el nombre desde el backend
  obtenerNombre() {
    // Aquí iría la lógica para obtener el nombre del backend
    // Y asignarlo a la variable 'nombre'
    this.nombre = 'Carlos'; // Esto es solo un ejemplo, deberías reemplazarlo con el valor obtenido del backend
  }
}
