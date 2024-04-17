import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChildren, QueryList, ElementRef, inject } from '@angular/core';
import { DatosModalService } from '../../../Services/Datos_Modal/datos-modal.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'editar-paciente',
  standalone: true,
  imports: [ NgbDropdownModule, CommonModule, FormsModule ],
  templateUrl: './editar-paciente.component.html',
  styleUrl: './editar-paciente.component.sass'
})
export class EditarPacienteComponent {

  paciente: any | null = null;

  esMasculino: boolean = false;
  esFemenino: boolean = false;

  esDonadorP: boolean = false;
  esDonadorN: boolean = false;

  esCasadoP: boolean = false;
  esCasadoN: boolean = false;

  esTrabajadorP: boolean = false;
  esTrabajadorN: boolean = false;

  habitos: string[] = [];
  antecedentes: string[] = [];
  antecedentes_familiares: string[] = [];
  antecedentes_epidemiologicos: string[] = [];

  constructor(private datosmodalService: DatosModalService, private http: HttpClient) { }

  ngOnInit() {
    this.datosmodalService.pacienteActual.subscribe(paciente => {
      this.paciente = paciente;
      this.esMasculino = paciente?.sexo === 'M';
      this.esFemenino = paciente?.sexo === 'F';

      this.esDonadorP = paciente?.es_donador === 1;
      this.esDonadorN = paciente?.es_donador === 0;

      this.esCasadoP = paciente?.es_casado === 1;
      this.esCasadoN = paciente?.es_casado === 0;
      
      this.esTrabajadorP = paciente?.es_trabajador === 1;
      this.esTrabajadorN = paciente?.es_trabajador === 0;

      if (paciente && paciente.habitos) {
        this.habitos = paciente.habitos;
      }

      if (paciente && paciente.antecedentes) {
        this.antecedentes = paciente.antecedentes;
      }

      if (paciente && paciente.antecedentes_familiares) {
        this.antecedentes_familiares = paciente.antecedentes_familiares;
      }

      if (paciente && paciente.antecedentes_epidemiologicos) {
        this.antecedentes_epidemiologicos = paciente.antecedentes_epidemiologicos;
      }
      
    });
  }

  // Agrega métodos para manejar los cambios de los checkboxes
  cambiarSexo(esMasculino: boolean) {
    this.esMasculino = esMasculino;
    this.esFemenino = !esMasculino;
    this.paciente.sexo = esMasculino ? 'M' : 'F';
  }

  cambiarDonador(esDonadorP: boolean) {
    this.esDonadorP = esDonadorP;
    this.esDonadorN = !esDonadorP;
    this.paciente.es_donador = esDonadorP ? 1 : 0;
  }

  cambiarCasado(esCasadoP: boolean) {
    this.esCasadoP = esCasadoP;
    this.esCasadoN = !esCasadoP;
    this.paciente.es_casado = esCasadoP ? 1 : 0;
  }

  cambiarTrabajador(esTrabajadorP: boolean) {
    this.esTrabajadorP = esTrabajadorP;
    this.esTrabajadorN = !esTrabajadorP;
    this.paciente.es_trabajador = esTrabajadorP ? 1 : 0;
  }


  // En tu componente TypeScript:
  selectedImage: File | null = null;

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
    // Procesa la imagen según tus necesidades.
  }

  getObjectUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  borrarImagen(): void {
    this.selectedImage = null;
  }

  trackByDato(index: number, dato: any): string {
    return dato.id; // Asume que cada hábito tiene una propiedad única 'id'
  }

  @ViewChildren('habito') habito: QueryList <ElementRef>;

  agregarHabito() {
    let allFilled = true;
    this.habito.forEach(habito => {
      if (habito.nativeElement.value === '') {
        allFilled = false;
      }
    });
  
    if (allFilled) {
      this.habitos.push(''); // Agrega un espacio vacío para un nuevo hábito
    }
  }
  actualizarHabito(valor: string, indice: number) {
    // Actualiza solo el elemento específico del array de hábitos
    this.habitos[indice] = valor;
  }

  @ViewChildren('antecedente') antecedente: QueryList <ElementRef>;

  agregarAntecedente() {
    let allFilled = true;
    this.antecedente.forEach(antecedente => {
      if (antecedente.nativeElement.value === '') {
        allFilled = false;
      }
    });
  
    if (allFilled) {
      this.antecedentes.push(''); // Agrega un espacio vacío para un nuevo hábito
    }
  }
  actualizarAntecedente(valor: string, indice: number) {
    // Actualiza solo el elemento específico del array de hábitos
    this.antecedentes[indice] = valor;
  }

  @ViewChildren('antfamiliar') antfamiliar: QueryList <ElementRef>;

  agregarAntFamiliar() {
    let allFilled = true;
    this.antfamiliar.forEach(antfamiliar => {
      if (antfamiliar.nativeElement.value === '') {
        allFilled = false;
      }
    });
  
    if (allFilled) {
      this.antecedentes_familiares.push(''); // Agrega un espacio vacío para un nuevo hábito
    }
  }
  actualizarAntFamiliar(valor: string, indice: number) {
    // Actualiza solo el elemento específico del array de hábitos
    this.antecedentes_familiares[indice] = valor;
  }

  @ViewChildren('antepidemiologico') antepidemiologico: QueryList <ElementRef>;

  agregarAntEpidemiologico() {
    let allFilled = true;
    this.antepidemiologico.forEach(antepidemiologico => {
      if (antepidemiologico.nativeElement.value === '') {
        allFilled = false;
      }
    });
  
    if (allFilled) {
      this.antecedentes_epidemiologicos.push(''); // Agrega un espacio vacío para un nuevo hábito
    }
  }
  actualizarAntEpidemiologico(valor: string, indice: number) {
    // Actualiza solo el elemento específico del array de hábitos
    this.antecedentes_epidemiologicos[indice] = valor;
  }

  public modalService = inject(NgbModal);

  guardarPaciente() {
    /*
    const url = 'tu_endpoint_para_guardar_pacientes'; // Reemplaza con la URL de tu API
    this.http.post(url, this.paciente).subscribe({
      next: (respuesta) => {
        // Manejo de la respuesta del servidor
        console.log('Paciente guardado con éxito', respuesta);
      },
      error: (error) => {
        // Manejo de errores
        console.error('Error al guardar el paciente', error);
      }
    });
    */

    console.log(this.paciente);
    this.modalService.dismissAll();
  }


}
