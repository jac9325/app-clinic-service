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
import { DatosModalService } from '../../Services/Datos_Modal/datos-modal.service';


interface Paciente {
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
  id_paciente: number;
  tipo_documento: string;
  primer_nombre: string;
  segundo_nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  fecha_nacimiento: string;
  correo_electronico: string;
  numero_celular: string;
  telefono: string;
  pais: string;
  departamento: string;
  provincia: string;
  es_donador: number;
  es_casado: number;
  es_trabajador: number;
  numero_hijos: number;
  religion: string;
  lengua_materna: string;
  lugar_procedencia: string;
  direccion: string;
  color_piel: string;
  raza: string;
  grupo_sanguineo: string;
  nivel_estudio: string;
  habitos: string[];
  antecedentes: string[];
  antecedentes_familiares: string[];
  antecedentes_epidemiologicos: string[]
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

	openModal(content: TemplateRef<any>, person: Paciente) {
    const modalRef = this.modalService.open(content, { fullscreen: true });
    
    // Cambiar el paciente actual
    this.datosmodalService.cambiarPaciente(person);
  }

  constructor(private calendar: NgbCalendar, private modalService: NgbModal, private datosmodalService: DatosModalService) {
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
      (person.primer_nombre.toLowerCase().includes(this.filteredText.toLowerCase()) || 
      person.segundo_nombre.toLowerCase().includes(this.filteredText.toLowerCase()) || 
      person.primer_apellido.toLowerCase().includes(this.filteredText.toLowerCase()) || 
      person.segundo_apellido.toLowerCase().includes(this.filteredText.toLowerCase()) || 
      person.numero_documento.includes(this.filteredText)) &&
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
        ultima_atencion: '02/02/2024',
        numero_historia: 'HC25684526142',
        numero_documento: '25361425',
        sexo: 'M', 
        edad: '20 años',
        peso: '64 Kg',
        talla: '1.65 m',
        ruta_imagen: 'img.jpg',
        alergias: ['Penicilina', 'Dexametasona', 'Sulfa'],
        enfermedades_cronicas: ['Penicilina', 'Dexametasona', 'Sulfa'],
        fecha_cita: { year: 2024, month: 4, day: 1 },
        id_paciente: 20,
        tipo_documento: 'DNI',
        primer_nombre: 'Juan',
        segundo_nombre: 'Jose',
        primer_apellido: 'Alvarez',
        segundo_apellido: 'Bocanegra',
        fecha_nacimiento: '2001-10-12',
        correo_electronico: 'juasa@gmail.com',
        numero_celular: '952361245',
        telefono: '01254613',
        pais: 'Perú',
        departamento: 'Cusco',
        provincia: 'Acomayo',
        es_donador: 1,
        es_casado: 0,
        es_trabajador: 0,
        numero_hijos: 0,
        religion: 'Catolico',
        lengua_materna: 'castellano',
        lugar_procedencia: 'Cusco',
        direccion: 'Los nogales L-1',
        color_piel: 'trigueña',
        raza: 'criollo',
        grupo_sanguineo: 'O+',
        nivel_estudio: 'secundaria',
        habitos: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
        antecedentes: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
        antecedentes_familiares: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
        antecedentes_epidemiologicos: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
      },
      { 
        ultima_atencion: '03/02/2024',
        numero_historia: 'HC25684526143',
        numero_documento: '25361426',
        sexo: 'F', 
        edad: '21 años',
        peso: '65 Kg',
        talla: '1.66 m',
        ruta_imagen: 'img2.jpg',
        alergias: ['Ibuprofeno', 'Amoxicilina', 'Sulfa'],
        enfermedades_cronicas: ['Ibuprofeno', 'Amoxicilina', 'Sulfa'],
        fecha_cita: { year: 2024, month: 4, day: 1 },
        id_paciente: 21,
        tipo_documento: 'DNI',
        primer_nombre: 'Maria',
        segundo_nombre: 'Carmen',
        primer_apellido: 'Cconcha',
        segundo_apellido: 'Caceres',
        fecha_nacimiento: '2002-10-12',
        correo_electronico: 'maria@gmail.com',
        numero_celular: '952361245',
        telefono: '01254613',
        pais: 'Perú',
        departamento: 'Cusco',
        provincia: 'Cusco',
        es_donador: 1,
        es_casado: 1,
        es_trabajador: 1,
        numero_hijos: 1,
        religion: 'Catolico',
        lengua_materna: 'castellano',
        lugar_procedencia: 'Cusco',
        direccion: 'Los nogales L-1',
        color_piel: 'trigueña',
        raza: 'criollo',
        grupo_sanguineo: 'O+',
        nivel_estudio: 'secundaria',
        habitos: [  'tomar cafe diariamente',
                    'consumir tabaco diariamente'
        ],
        antecedentes: [  'tomar cafe diariamente',
                    'consumo de alcohol'
        ],
        antecedentes_familiares: [
        ],
        antecedentes_epidemiologicos: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
      },
      { 
        ultima_atencion: '04/02/2024',
        numero_historia: 'HC25684526144',
        numero_documento: '25361427',
        sexo: 'M', 
        edad: '22 años',
        peso: '66 Kg',
        talla: '1.67 m',
        ruta_imagen: 'img3.jpg',
        alergias: ['Aspirina', 'Paracetamol', 'Sulfa'],
        enfermedades_cronicas: ['Aspirina', 'Paracetamol', 'Sulfa'],
        fecha_cita: { year: 2024, month: 4, day: 1 },
        id_paciente: 22,
        tipo_documento: 'DNI',
        primer_nombre: 'Rodrigo',
        segundo_nombre: '',
        primer_apellido: 'Carpio',
        segundo_apellido: 'Quispe',
        fecha_nacimiento: '2001-10-12',
        correo_electronico: 'rodrigo@gmail.com',
        numero_celular: '952361245',
        telefono: '01254613',
        pais: 'Perú',
        departamento: 'Cusco',
        provincia: 'Acomayo',
        es_donador: 1,
        es_casado: 0,
        es_trabajador: 0,
        numero_hijos: 0,
        religion: 'Catolico',
        lengua_materna: 'castellano',
        lugar_procedencia: 'Cusco',
        direccion: 'Los nogales L-1',
        color_piel: 'trigueña',
        raza: 'criollo',
        grupo_sanguineo: 'O+',
        nivel_estudio: 'secundaria',
        habitos: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
        antecedentes: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
        antecedentes_familiares: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
        antecedentes_epidemiologicos: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
      },
      { 
        ultima_atencion: '05/02/2024',
        numero_historia: 'HC25684526145',
        numero_documento: '25361428',
        sexo: 'F', 
        edad: '23 años',
        peso: '67 Kg',
        talla: '1.68 m',
        ruta_imagen: 'img4.jpg',
        alergias: ['Metamizol', 'Dexametasona', 'Sulfa'],
        enfermedades_cronicas: ['Metamizol', 'Dexametasona', 'Sulfa'],
        fecha_cita: { year: 2024, month: 4, day: 1 },
        id_paciente: 23,
        tipo_documento: 'DNI',
        primer_nombre: 'Juan',
        segundo_nombre: 'Jose',
        primer_apellido: 'Alvarez',
        segundo_apellido: 'Bocanegra',
        fecha_nacimiento: '2001-10-12',
        correo_electronico: 'juasa@gmail.com',
        numero_celular: '952361245',
        telefono: '01254613',
        pais: 'Perú',
        departamento: 'Cusco',
        provincia: 'Acomayo',
        es_donador: 1,
        es_casado: 0,
        es_trabajador: 0,
        numero_hijos: 0,
        religion: 'Catolico',
        lengua_materna: 'castellano',
        lugar_procedencia: 'Cusco',
        direccion: 'Los nogales L-1',
        color_piel: 'trigueña',
        raza: 'criollo',
        grupo_sanguineo: 'O+',
        nivel_estudio: 'secundaria',
        habitos: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
        antecedentes: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
        antecedentes_familiares: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
        antecedentes_epidemiologicos: [  'tomar cafe diariamente',
                    'consumir tabaco',
                    'consumo de alcohol'
        ],
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