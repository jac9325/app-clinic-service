import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Paciente {
  numero_prefactura: string;
  serie: string;
  correlativo : string;
  total: string
}

@Component({
  selector: 'tabla-cuenta',
  standalone: true,
  imports: [ RouterModule, CommonModule, FontAwesomeModule ],
  templateUrl: './tabla_cuenta.component.html',
  styleUrl: './tabla_cuenta.component.sass'
})
export class TablaCuentaComponent  implements OnInit {

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
        numero_prefactura: '0001',
        serie: 'Persona 1', 
        correlativo: 'HC25684526142',
        total: '25361425'
      },
      { 
        numero_prefactura: '0002',
        serie: 'Persona 2', 
        correlativo: 'HC25684526142',
        total: '25361425'
      },
      { 
        numero_prefactura: '0003',
        serie: 'Persona 3', 
        correlativo: 'HC25684526142',
        total: '25361425'
      },
      { 
        numero_prefactura: '0004',
        serie: 'Persona 4', 
        correlativo: 'HC25684526142',
        total: '25361425'
      }
    ]);
  }
}