import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

interface Actividad {
  nombre: string;
  horaInicio: string;
  horaFin: string;
  fecha: NgbDateStruct;
}

@Component({
  selector: 'calendario',
  standalone: true,
  imports: [ RouterModule, CommonModule, NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './calendario_actividades.component.html',
  styleUrl: './calendario_actividades.component.sass'
})
export class CalendarioComponent {

  today = inject(NgbCalendar).getToday();
  model: NgbDateStruct = this.today;
  date: { year: number; month: number } = { year: this.today.year, month: this.today.month };

  actividades: Actividad[] = [];
  actividadesFiltradas: Actividad[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.getActividades();
  }

  compararFechas(fecha1: NgbDateStruct, fecha2: NgbDateStruct) {
    return fecha1.year === fecha2.year && fecha1.month === fecha2.month && fecha1.day === fecha2.day;
  }

  filtrarActividadesPorFecha() {
    this.actividadesFiltradas = this.actividades.filter(actividad => this.compararFechas(actividad.fecha, this.model));
    console.log('Fecha seleccionada:', this.model); // Agrega esta línea
    this.cdr.markForCheck();
  }

  getActividades() {
    // Aquí debes implementar la lógica para recuperar las actividades desde el backend.
    // Por ahora, solo voy a generar algunas actividades de ejemplo.
    this.actividades = [
      { nombre: 'Actividad 1', horaInicio: '08:00', horaFin: '10:00', fecha: { year: 2024, month: 2, day: 24 } },
      { nombre: 'Actividad 2', horaInicio: '10:30', horaFin: '12:00', fecha: { year: 2024, month: 2, day: 24 } },
      { nombre: 'Actividad 3', horaInicio: '13:00', horaFin: '15:00', fecha: { year: 2024, month: 2, day: 25 } },
      { nombre: 'Actividad 4', horaInicio: '15:30', horaFin: '17:00', fecha: { year: 2024, month: 2, day: 26 } },
      { nombre: 'Actividad 5', horaInicio: '17:30', horaFin: '19:00', fecha: { year: 2024, month: 2, day: 27 } }
    ];
    this.filtrarActividadesPorFecha();
  }
}