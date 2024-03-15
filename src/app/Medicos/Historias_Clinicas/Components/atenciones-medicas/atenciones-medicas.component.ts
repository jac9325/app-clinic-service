import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Atenciones_Medicas {
  fecha: string;
  hora: string;
  consultorio : string;
  doctor: string;
  diagnostico: string;
  tratamiento: string
}


@Component({
  selector: 'atenciones-medicas',
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule ],
  templateUrl: './atenciones-medicas.component.html',
  styleUrl: './atenciones-medicas.component.sass'
})
export class AtencionesMedicasComponent {
  atenciones: Atenciones_Medicas[] = [];

  ngOnInit() {
    this.getPeople('').subscribe(atenciones => {
      this.atenciones = atenciones;
    });
  }

  getPeople(filter: string): Observable<Atenciones_Medicas[]> {
    // Aquí debes implementar la lógica para obtener la lista de personas desde tu backend
    // Por ahora, solo devolveremos una lista de prueba
    return of([
      { 
        fecha: '12/04/2024',
        hora: '8:00 - 9:00 am',
        consultorio : 'Cardiologia',
        doctor: 'Alex Sanches Fernandez',
        diagnostico: 'Insuficiencia Cardiaca',
        tratamiento: 'Tratamiento'
      },
      { 
        fecha: '12/04/2024',
        hora: '8:00 - 9:00 am',
        consultorio : 'Cardiologia',
        doctor: 'Alex Sanches Fernandez',
        diagnostico: 'Insuficiencia Cardiaca',
        tratamiento: 'Tratamiento'
      },
      { 
        fecha: '12/04/2024',
        hora: '8:00 - 9:00 am',
        consultorio : 'Cardiologia',
        doctor: 'Alex Sanches Fernandez',
        diagnostico: 'Insuficiencia Cardiaca',
        tratamiento: 'Tratamiento'
      },
      { 
        fecha: '12/04/2024',
        hora: '8:00 - 9:00 am',
        consultorio : 'Cardiologia',
        doctor: 'Alex Sanches Fernandez',
        diagnostico: 'Insuficiencia Cardiaca',
        tratamiento: 'Tratamiento'
      }
    ]);
  }
}
