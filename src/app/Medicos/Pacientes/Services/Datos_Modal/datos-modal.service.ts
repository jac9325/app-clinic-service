import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosModalService {
  private pacienteSource = new BehaviorSubject<any | null>(null);
  pacienteActual = this.pacienteSource.asObservable();

  constructor() { }

  cambiarPaciente(paciente: any) {
    this.pacienteSource.next(paciente);
  }
}