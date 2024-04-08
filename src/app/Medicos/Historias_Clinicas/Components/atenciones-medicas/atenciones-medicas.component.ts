import { Component, inject, TemplateRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VerHojaAtencionComponent } from './ver-hoja-atencion/ver-hoja-atencion.component';
import { EditarHojaAtencionComponent } from './editar-hoja-atencion/editar-hoja-atencion.component';

interface Atenciones_Medicas {
  fecha: string;
  hora: string;
  consultorio : string;
  doctor: string;
  diagnostico: string;
  tratamiento: string
}


@Component({
  selector: 'atenciones-medicas',
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule, EditarHojaAtencionComponent, VerHojaAtencionComponent ],
  templateUrl: './atenciones-medicas.component.html',
  styleUrl: './atenciones-medicas.component.sass',
})
export class AtencionesMedicasComponent {
  atenciones: Atenciones_Medicas[] = [];
  private modalService = inject(NgbModal);

	openModal(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl', centered: true });
	}

  ngOnInit() {
    this.getPeople('').subscribe(atenciones => {
      this.atenciones = atenciones;
    });
  }

  getPeople(filter: string): Observable<Atenciones_Medicas[]> {
    // Aquí debes implementar la lógica para obtener la lista de personas desde tu backend
    // Por ahora, solo devolveremos una lista de prueba
    return of([
      { 
        fecha: '12/04/2024',
        hora: '8:00 - 9:00 am',
        consultorio : 'Cardiologia',
        doctor: 'Alex Sanches Fernandez',
        diagnostico: 'Insuficiencia Cardiaca',
        tratamiento: 'Tratamiento'
      },
      { 
        fecha: '12/04/2024',
        hora: '8:00 - 9:00 am',
        consultorio : 'Cardiologia',
        doctor: 'Alex Sanches Fernandez',
        diagnostico: 'Insuficiencia Cardiaca',
        tratamiento: 'Tratamiento'
      },
      { 
        fecha: '12/04/2024',
        hora: '8:00 - 9:00 am',
        consultorio : 'Cardiologia',
        doctor: 'Alex Sanches Fernandez',
        diagnostico: 'Insuficiencia Cardiaca',
        tratamiento: 'Tratamiento'
      },
      { 
        fecha: '12/04/2024',
        hora: '8:00 - 9:00 am',
        consultorio : 'Cardiologia',
        doctor: 'Alex Sanches Fernandez',
        diagnostico: 'Insuficiencia Cardiaca',
        tratamiento: 'Tratamiento'
      }
    ]);
  }
}
