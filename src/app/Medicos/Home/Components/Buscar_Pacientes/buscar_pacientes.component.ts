import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDateStruct, NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CitaMedicaResponse } from '../../../../Models/Cita/CitaMedicaResponse';
import { ConvertCita } from '../../../../Services/ServicesCitaMedica/ConvertCita.service';
import { selectCitas } from '../../../../States/Cita/cita.selector';
import { AppState } from '../../../../States/app.state';
import { FechaSeleccionadaService } from '../../Services/Fecha_Seleccionada/fecha-seleccionada.service';


@Component({
  selector: 'buscar_pacientes',
  standalone: true,
  imports: [ RouterModule, CommonModule, ReactiveFormsModule, DecimalPipe, AsyncPipe, ReactiveFormsModule, NgbHighlight ],
  templateUrl: './buscar_pacientes.component.html',
  styleUrl: './buscar_pacientes.component.sass',
})

export class BuscarPacientesComponent implements OnInit {

  people: any[] = [];
  citasMedicasResponse: CitaMedicaResponse[];
  filteredPeople: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  selectedPerson: any;
  filter = new FormControl('');

  constructor(
    private fechaSeleccionadaService: FechaSeleccionadaService,
    private convertCitaMedicaService: ConvertCita,
    private store: Store<AppState>
  ) {
    this.fechaSeleccionadaService.fechaSeleccionada$.subscribe(fecha => {
      this.fechaSeleccionada = fecha;
      this.applyFilters();
    });
  }
  /* Oninit */
  ngOnInit() {
    this.store.select(selectCitas).subscribe(item => {
        this.citasMedicasResponse = item;
    });

    this.getPeople('').subscribe(people => {
      this.people = people;
      console.log("este es el objeto", this.people)
      this.filteredPeople.next(this.people);
      // Mover la selección de la primera persona después de aplicar los filtros
      this.applyFilters();
    });
  
    this.filter.valueChanges.subscribe(text => {
      this.filteredPeople.next(this.filterPeople(text || ''));
      this.applyFilters(); // Asegúrate de aplicar los filtros después de cada cambio
    });
  
    this.fechaSeleccionadaService.fechaSeleccionada$.subscribe(fechaSeleccionada => {
      if (fechaSeleccionada) {
        this.filteredPeople.next(this.filterPeopleByDate(fechaSeleccionada));
        this.applyFilters(); // Aplicar los filtros también aquí
      }
    });
  }


  /* Metodos necesarios */
  filterPeopleByDate(fechaSeleccionada: NgbDateStruct): any[] {
    return this.people.filter(person => {
      // Asumiendo que cada persona tiene una propiedad 'fecha' de tipo NgbDateStruct
      return  person.fecha.year === fechaSeleccionada.year &&
              person.fecha.month === fechaSeleccionada.month &&
              person.fecha.day === fechaSeleccionada.day;
    });
  }

  filterPeople(text: string) {
    const filtered = this.people.filter(person => person.name.toLowerCase().includes(text.toLowerCase()));
    if (filtered.length > 0) {
      this.selectPerson(filtered[0]);
    }
    return filtered;
  }

  fechaSeleccionada: NgbDateStruct | null = null;

  applyFilters() {
    let filtered = this.people;
  
    // Filtro por texto
    const text = this.filter.value;
    if (text) {
      filtered = filtered.filter(person => person.name.toLowerCase().includes(text.toLowerCase()));
    }
  
    // Filtro por fecha
    if (this.fechaSeleccionada) {
      filtered = filtered.filter(person => {
        return  person.fecha && person.fecha.year === this.fechaSeleccionada.year &&
                person.fecha.month === this.fechaSeleccionada.month &&
                person.fecha.day === this.fechaSeleccionada.day;
      });
    }
  
    // Actualizar la lista filtrada
    this.filteredPeople.next(filtered);
  
    // Seleccionar automáticamente la primera persona de la lista filtrada
    if (filtered.length > 0) {
      this.selectedPerson = filtered[0];
    } else {
      this.selectedPerson = null; // O manejar como se desee si no hay personas filtradas
    }
  }

  selectPerson(person: any) {
    this.selectedPerson = person;
  }

  getPeople(filter: string): Observable<any[]> {
    // Aquí debes implementar la lógica para obtener la lista de personas desde tu backend
    // Por ahora, solo devolveremos una lista de prueba
    return of(this.convertCitaMedicaService.convertToAppointmentList(this.citasMedicasResponse));
  }

  getColor(appointmentTime: string): string {
    const timeParts = appointmentTime.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    // Mapeamos las horas y minutos a segundos, pero multiplicamos las horas por un factor mayor para aumentar la diferencia de color
    const seconds = hours * 3600 * 50 + minutes * 60;
    let hash = seconds;
    let color = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return "#" + "00000".substring(0, 6 - color.length) + color;
  }

  
}
