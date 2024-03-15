import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Personal {
  numero_documento: string;
  personal: string;
  usuario : string;
  perfil: string
}


@Component({
  selector: 'personal',
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule ],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.sass'
})
export class PersonalComponent {
  people: Personal[] = [];

  ngOnInit() {
    this.getPeople('').subscribe(people => {
      this.people = people;
    });
  }

  getPeople(filter: string): Observable<Personal[]> {
    // Aquí debes implementar la lógica para obtener la lista de personas desde tu backend
    // Por ahora, solo devolveremos una lista de prueba
    return of([
      { 
        numero_documento: '80544520',
        personal: 'enfermera',
        usuario : '032145',
        perfil: 'usuario1'
      },
      { 
        numero_documento: '80544520',
        personal: 'enfermera',
        usuario : '032145',
        perfil: 'usuario2'
      },
      { 
        numero_documento: '80544520',
        personal: 'enfermera',
        usuario : '032145',
        perfil: 'usuario3'
      },
      { 
        numero_documento: '80544520',
        personal: 'enfermera',
        usuario : '032145',
        perfil: 'usuario4'
      }
    ]);
  }
}
