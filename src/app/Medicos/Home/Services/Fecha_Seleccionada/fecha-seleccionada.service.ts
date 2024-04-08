import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class FechaSeleccionadaService {
  private fechaSeleccionadaSource = new BehaviorSubject<NgbDateStruct | null>(null);
  fechaSeleccionada$ = this.fechaSeleccionadaSource.asObservable();

  constructor() { }

  establecerFechaSeleccionada(fecha: NgbDateStruct) {
    this.fechaSeleccionadaSource.next(fecha);
  }
}