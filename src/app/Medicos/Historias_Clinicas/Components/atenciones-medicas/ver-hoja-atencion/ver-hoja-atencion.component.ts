import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'ver-hoja-atencion',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './ver-hoja-atencion.component.html',
  styleUrl: './ver-hoja-atencion.component.sass'
})
export class VerHojaAtencionComponent {
  
}
