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
    //especialista:Especialista
  //especialista$: Observable<Especialista>;
  especialistaNombre: string;
  constructor(private store: Store<AppState>) {
    this.actualizarSaludo(); 
  }
  especialista$ = this.store.select(selectEspecialistaMedico);
  ngOnInit(): void {
    debugger;
    // Seleccionar datos del estado inicial usando el selector
    this.especialista$.subscribe(especialista => {
      this.especialistaNombre = especialista.primer_nombre;
       // Acceder a la información del especialista
    });
    // this.store.pipe(
    //   select(selectorLoginMedicoState),
    //   catchError(error => {
    //     console.error('Error al suscribirse al estado:', error);
    //     // Puedes manejar el error aquí o lanzarlo nuevamente para que otros manejen el error más adelante
    //     return of(null); // Devuelve un observable vacío o con un valor por defecto
    //   })
    // ).subscribe(especialista => {
      
    //   if (especialista) {
    //     console.log(especialista);
    //     // Aquí puedes realizar cualquier otra lógica necesaria con los datos obtenidos
    //   }
    // });
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
