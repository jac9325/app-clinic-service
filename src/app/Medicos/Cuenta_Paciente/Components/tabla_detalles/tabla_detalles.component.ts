import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Paciente {
  numero_prefactura: string;
  precio_unitario: number;
  cantidad : number;
  total: number;
  sub_total: number;
  IGV: number
}

@Component({
  selector: 'tabla-detalles',
  standalone: true,
  imports: [ RouterModule, CommonModule, FontAwesomeModule ],
  templateUrl: './tabla_detalles.component.html',
  styleUrl: './tabla_detalles.component.sass'
})
export class TablaDetallesComponent implements OnInit {

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
        precio_unitario: 100,
        cantidad : 5,
        total: 500,
        sub_total: 500,
        IGV: 45
      },
      { 
        numero_prefactura: '0002',
        precio_unitario: 100,
        cantidad : 5,
        total: 500,
        sub_total: 500,
        IGV: 45
      },
      { 
        numero_prefactura: '0003',
        precio_unitario: 100,
        cantidad : 5,
        total: 500,
        sub_total: 500,
        IGV: 45
      },
      { 
        numero_prefactura: '0004',
        precio_unitario: 100,
        cantidad : 5,
        total: 500,
        sub_total: 500,
        IGV: 45
      }
    ]);
  }
}
