import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChildren, QueryList, ElementRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DatosModalService } from '../Pacientes/Services/Datos_Modal/datos-modal.service';


interface Paciente {
  numero_documento: string;
  sexo: string;
  edad: string;
  peso: string;
  talla: string;
  ruta_imagen: string;
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
  selector: 'nuevo-paciente',
  standalone: true,
  imports: [ NgbDropdownModule, CommonModule, FormsModule ],
  templateUrl: './nuevo-paciente.component.html',
  styleUrl: './nuevo-paciente.component.sass'
})
export class NuevoPacienteComponent {

  paciente: Paciente | null = null;


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

  constructor(private http: HttpClient) { }

  
  

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
    this.paciente.es_casado = esTrabajadorP ? 1 : 0;
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

