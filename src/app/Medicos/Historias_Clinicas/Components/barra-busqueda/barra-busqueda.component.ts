import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'barra-busqueda',
  standalone: true,
  imports: [ RouterModule, NgbDropdownModule, CommonModule, ReactiveFormsModule, DecimalPipe, AsyncPipe, ReactiveFormsModule, NgbHighlight ],
  templateUrl: './barra-busqueda.component.html',
  styleUrl: './barra-busqueda.component.sass'
})
export class BarraBusquedaComponent {

  people: any[] = [];
  filteredPeople: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  selectedPerson: any;
  filter = new FormControl('');

  ngOnInit() {
    this.getPeople('').subscribe(people => {
      this.people = people;
      if (people.length > 0) {
        this.selectedPerson = people[0];
      }
      this.filteredPeople.next(this.people);
    });
    this.filter.valueChanges.subscribe(text => {
      this.filteredPeople.next(this.filterPeople(text || ''));
    });
  }

  filterPeople(text: string) {
    const filtered = this.people.filter(person => person.name.toLowerCase().includes(text.toLowerCase()));
    if (filtered.length > 0) {
      this.selectPerson(filtered[0]);
    }
    return filtered;
  }

  selectPerson(person: any) {
    this.selectedPerson = person;
  }

  getPeople(filter: string): Observable<any[]> {
    // Aquí debes implementar la lógica para obtener la lista de personas desde tu backend
    // Por ahora, solo devolveremos una lista de prueba
    return of([
      { 
        name: 'Persona 1', 
        appointmentTime: '9:00 AM' , 
        tipoCita: 'Nuevo', 
        sexo: 'Masculino', 
        edad: '20 años',
        symptoms: ['Fiebre', 'Tos', 'Acidez'],
        lastReview: 'Dr. Carlos 12 de enero 2024',
        observation: 'Fuerte fiebre y tos leve y normal hemoglobina',
        prescription: 'Paracetamol - 2 veces al dia Dizoman - Dia y noche antes de dormir'
      },
      { name: 'Persona 2', appointmentTime: '10:00 AM', tipoCita: 'Reevaluacion', sexo: 'Femenino', edad: '30 años' },
      { name: 'Persona 3', appointmentTime: '11:00 AM', tipoCita: 'Nuevo', sexo: 'Masculino', edad: '25 años' },
      { name: 'Persona 4', appointmentTime: '12:00 AM', tipoCita: 'Reevaluacion', sexo: 'Femenino', edad: '48 años' },
      { name: 'Persona 5', appointmentTime: '13:00 AM', tipoCita: 'Nuevo', sexo: 'Femenino', edad: '53 años' },
      { name: 'Persona 6', appointmentTime: '14:00 AM', tipoCita: 'Reevaluacion', sexo: 'Masculino', edad: '27 años' },
      { name: 'Persona 7', appointmentTime: '15:00 AM', tipoCita: 'Nuevo', sexo: 'Femenino', edad: '21 años' },
      { name: 'Persona 8', appointmentTime: '16:00 AM', tipoCita: 'Reevaluacion', sexo: 'Masculino', edad: '72 años' }
    ]);
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

  showDropdown = false;

  toggleDropdown(event: Event) {
    this.showDropdown = (event.target as HTMLInputElement).value !== '';
  }

}