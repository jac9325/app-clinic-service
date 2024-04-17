import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectEspecialistaMedico } from '../../../../../States/Login/login.selector';
import { AppState } from '../../../../../States/app.state';


@Component({
  selector: 'bienvenida',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.sass'
})
export class BienvenidaComponent {
  nombre: string; // Valor por defecto
  saludo: string; // Valor por defecto
  especialistaNombre: string;
  constructor(private store: Store<AppState>) {
    this.actualizarSaludo(); 
  }
  especialista$ = this.store.select(selectEspecialistaMedico);
  ngOnInit(): void {
    // Seleccionar datos del estado inicial usando el selector
    this.especialista$.subscribe(especialista => {
      this.especialistaNombre = especialista.primer_nombre;
       // Acceder a la información del especialista
    });
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
    this.nombre = 'Carlos'; // Esto es solo un ejemplo, deberías reemplazarlo con el valor obtenido del backend
  }
}
