import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Paciente {
  numero_operacion: string;
  fecha: string;
  monto : number;
  motivo: string
}

@Component({
  selector: 'tabla-egresos',
  standalone: true,
  imports: [ RouterModule, CommonModule, FontAwesomeModule ],
  templateUrl: './tabla_egresos.component.html',
  styleUrl: './tabla_egresos.component.sass'
})
export class TablaEgresosComponent  implements OnInit {

  people: Paciente[] = [];

  ngOnInit() {
    this.getPeople('').subscribe(people => {
      this.people = people;
    });
  }

  getPeople(filter: string): Observable<Paciente[]> {
    // Aquí debes implementar la lógica para obtener la lista de personas desde tu backend
    // Por ahora, solo devolveremos una lista de prueba
    return of([
      { 
        numero_operacion: '0001',
        fecha: 'Persona 1', 
        monto: 500,
        motivo: '25361425'
      },
      { 
        numero_operacion: '0002',
        fecha: 'Persona 1', 
        monto: 500,
        motivo: '25361425'
      },
      { 
        numero_operacion: '0003',
        fecha: 'Persona 1', 
        monto: 500,
        motivo: '25361425'
      },
      { 
        numero_operacion: '0004',
        fecha: 'Persona 1', 
        monto: 500,
        motivo: '25361425'
      }
      ,
      { 
        numero_operacion: '0004',
        fecha: 'Persona 1', 
        monto: 500,
        motivo: '25361425'
      },
      { 
        numero_operacion: '0004',
        fecha: 'Persona 1', 
        monto: 500,
        motivo: '25361425'
      },
      { 
        numero_operacion: '0004',
        fecha: 'Persona 1', 
        monto: 500,
        motivo: '25361425'
      },
      { 
        numero_operacion: '0004',
        fecha: 'Persona 1', 
        monto: 500,
        motivo: '25361425'
      },
      { 
        numero_operacion: '0004',
        fecha: 'Persona 1', 
        monto: 500,
        motivo: '25361425'
      },
      { 
        numero_operacion: '0004',
        fecha: 'Persona 1', 
        monto: 500,
        motivo: '25361425'
      }
    ]);
  }
}