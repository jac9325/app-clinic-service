import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EspecialistaService } from '../../../Services/Presentacion_Medico/especialista.service';
import { error } from 'console';

@Component({
  selector: 'bienvenida',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.sass'
})
export class BienvenidaComponent implements OnInit {
  nombre: string = 'Doctor!'; // Valor por defecto
  saludo: string = 'Buenos días'; // Valor por defecto

  constructor(private especialistaService: EspecialistaService) {
    //this.actualizarSaludo();
  }

  ngOnInit(): void {
      this.actualizarSaludo();
      this.obtenerNombre(); 
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

  obtenerNombre(){
    const id = 1; //id : id_usuario_institucion_especialista
    this.especialistaService.getEspecialista(id).subscribe({
      next: (especialista) => {
        this.nombre = especialista.primer_apellido || 'Doctor';
      },
      error: (error) => {
        console.error('Error fetching doctor name:', error);
      }

    });
  }
}
