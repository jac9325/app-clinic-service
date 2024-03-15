import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { NgbHighlight, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


interface Paciente {
  numero: string;
  name: string;
  ultima_atencion: string;
  numero_historia: string;
  numero_documento: string;
  fecha_cita: NgbDateStruct;
}


@Component({
  selector: 'tabla-pacientes-cuenta',
  standalone: true,
  imports: [ RouterModule, CommonModule, ReactiveFormsModule, ReactiveFormsModule, AsyncPipe, DecimalPipe, 
              NgbDatepickerModule, FormsModule, JsonPipe, NgbHighlight, NgbModule, NgbDropdownModule, FontAwesomeModule],
  templateUrl: './tabla_pacientes_cuenta.component.html',
  styleUrl: './tabla_pacientes_cuenta.component.sass'
})

export class TablaPacientesCuentaComponent implements OnInit {

  today: NgbDateStruct;
  model: NgbDateStruct;
  date: { year: number; month: number };
  people: Paciente[] = [];
  filteredPeople: BehaviorSubject<Paciente[]> = new BehaviorSubject<Paciente[]>([]);
  selectedPerson: Paciente | null = null;
  filter = new FormControl('');
  filteredText: string = '';

  constructor(private calendar: NgbCalendar) {
    this.today = this.calendar.getToday();
    this.model = this.today;
    this.date = { year: this.today.year, month: this.today.month };
  }

  ngOnInit() {
    this.getPeople('').subscribe(people => {
      this.people = people;
      if (people.length > 0) {
        this.selectedPerson = people[0];
      }
      this.filterPeople();
    });
    this.filter.valueChanges.subscribe(text => {
      this.filteredText = text || '';
      this.filterPeople();
    });
  }

  filterPeople() {
    const filtered = this.people.filter(person =>
      (person.name.toLowerCase().includes(this.filteredText.toLowerCase()) || person.numero_documento.includes(this.filteredText)) &&
      this.compararFechas(person.fecha_cita, this.model)
    );
    this.filteredPeople.next(filtered);
    this.selectedPerson = filtered[0] || null;
  }

  selectPerson(person: Paciente) {
    this.selectedPerson = person;
  }

  getPeople(filter: string): Observable<Paciente[]> {
    // Aquí debes implementar la lógica para obtener la lista de personas desde tu backend
    // Por ahora, solo devolveremos una lista de prueba
    return of([
      { 
        numero: '0001',
        name: 'Persona 1', 
        ultima_atencion: '02/02/2024',
        numero_historia: 'HC25684526142',
        numero_documento: '25361425',
        fecha_cita: { year: 2024, month: 2, day: 26 }
      },
      { 
        numero: '0002',
        name: 'Persona 2', 
        ultima_atencion: '03/02/2024',
        numero_historia: 'HC25684526143',
        numero_documento: '25361426',
        fecha_cita: { year: 2024, month: 2, day: 26 }
      },
      { 
        numero: '0003',
        name: 'Persona 3', 
        ultima_atencion: '04/02/2024',
        numero_historia: 'HC25684526144',
        numero_documento: '25361427',
        fecha_cita: { year: 2024, month: 2, day: 26 }
      },
      { 
        numero: '0004',
        name: 'Persona 4', 
        ultima_atencion: '05/02/2024',
        numero_historia: 'HC25684526145',
        numero_documento: '25361428',
        fecha_cita: { year: 2024, month: 2, day: 27 }
      }
    ]);
  }

  compararFechas(fecha1: NgbDateStruct, fecha2: NgbDateStruct) {
    return fecha1.year === fecha2.year && fecha1.month === fecha2.month && fecha1.day === fecha2.day;
  }
}