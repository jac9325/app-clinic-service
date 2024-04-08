import { Component, OnInit, inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
import { VerPacienteComponent } from './ver-paciente/ver-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';


interface Paciente {
  numero: string;
  name: string;
  ultima_atencion: string;
  numero_historia: string;
  numero_documento: string;
  sexo: string;
  edad: string;
  peso: string;
  talla: string;
  ruta_imagen: string;
  alergias: string[];
  enfermedades_cronicas: string[];
  fecha_cita: NgbDateStruct;
}


@Component({
  selector: 'tabla-pacientes',
  standalone: true,
  imports: [ RouterModule, CommonModule, ReactiveFormsModule, ReactiveFormsModule, AsyncPipe, DecimalPipe, VerPacienteComponent, EditarPacienteComponent,
              NgbDatepickerModule, FormsModule, JsonPipe, NgbHighlight, NgbModule, NgbDropdownModule, FontAwesomeModule],
  templateUrl: './tabla_pacientes.component.html',
  styleUrl: './tabla_pacientes.component.sass'
})

export class TablaPacientesComponent implements OnInit {

  today: NgbDateStruct;
  model: NgbDateStruct;
  date: { year: number; month: number };
  people: Paciente[] = [];
  filteredPeople: BehaviorSubject<Paciente[]> = new BehaviorSubject<Paciente[]>([]);
  selectedPerson: Paciente | null = null;
  filter = new FormControl('');
  filteredText: string = '';
  private modalService = inject(NgbModal);

	openModal(content: TemplateRef<any>) {
		this.modalService.open(content, { fullscreen: true });
	}

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
        sexo: 'Masculino', 
        edad: '20 años',
        peso: '64 Kg',
        talla: '1.65 m',
        ruta_imagen: 'img.jpg',
        alergias: ['Penicilina', 'Dexametasona', 'Sulfa'],
        enfermedades_cronicas: ['Penicilina', 'Dexametasona', 'Sulfa'],
        fecha_cita: { year: 2024, month: 4, day: 1 }
      },
      { 
        numero: '0002',
        name: 'Persona 2', 
        ultima_atencion: '03/02/2024',
        numero_historia: 'HC25684526143',
        numero_documento: '25361426',
        sexo: 'Femenino', 
        edad: '21 años',
        peso: '65 Kg',
        talla: '1.66 m',
        ruta_imagen: 'img2.jpg',
        alergias: ['Ibuprofeno', 'Amoxicilina', 'Sulfa'],
        enfermedades_cronicas: ['Ibuprofeno', 'Amoxicilina', 'Sulfa'],
        fecha_cita: { year: 2024, month: 4, day: 1 }
      },
      { 
        numero: '0003',
        name: 'Persona 3', 
        ultima_atencion: '04/02/2024',
        numero_historia: 'HC25684526144',
        numero_documento: '25361427',
        sexo: 'Masculino', 
        edad: '22 años',
        peso: '66 Kg',
        talla: '1.67 m',
        ruta_imagen: 'img3.jpg',
        alergias: ['Aspirina', 'Paracetamol', 'Sulfa'],
        enfermedades_cronicas: ['Aspirina', 'Paracetamol', 'Sulfa'],
        fecha_cita: { year: 2024, month: 4, day: 1 }
      },
      { 
        numero: '0004',
        name: 'Persona 4', 
        ultima_atencion: '05/02/2024',
        numero_historia: 'HC25684526145',
        numero_documento: '25361428',
        sexo: 'Femenino', 
        edad: '23 años',
        peso: '67 Kg',
        talla: '1.68 m',
        ruta_imagen: 'img4.jpg',
        alergias: ['Metamizol', 'Dexametasona', 'Sulfa'],
        enfermedades_cronicas: ['Metamizol', 'Dexametasona', 'Sulfa'],
        fecha_cita: { year: 2024, month: 4, day: 1 }
      }
    ]);
  }

  compararFechas(fecha1: NgbDateStruct, fecha2: NgbDateStruct) {
    return fecha1.year === fecha2.year && fecha1.month === fecha2.month && fecha1.day === fecha2.day;
  }

  dropdownStates: { [key: string]: boolean } = {}; // Un objeto para almacenar el estado de cada dropdown

  toggleDropdown(personId: string) {
    this.dropdownStates[personId] = !this.dropdownStates[personId];
  }

}