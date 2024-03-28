import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { EspecialistaService } from '../../../Services/Presentacion_Medico/especialista.service';
//import { ImagenMedicoDTO } from '../../../Models/Dto/Presentacion_Medico/imagen_medico';
import { error } from 'console';

@Component({
  selector: 'imagen-medico',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './imagen_medico.component.html',
  styleUrl: './imagen_medico.component.sass'
})
export class ImagenMedicoComponent {
  imagenUrl: string = '../../../../../assets/Medico_home_default.png'; // Valor por defecto src\assets\Medico_home_default.png

    constructor(private especialistaService: EspecialistaService) { }

  ngOnInit(): void {
    this.obtenerEspecialista();
  }

  obtenerEspecialista(): void{
    //id : id_usuario_institucion_especialista
    const id = 1; 

    this.especialistaService.getEspecialista(id).subscribe({
      next: (especialista) => {
        // Extract the image path from the especialista
        let filename = especialista.rutaimagen.substring(especialista.rutaimagen.lastIndexOf('\\') + 1);
        if (!filename) {
          // If filename is empty or undefined, use default image path
          this.imagenUrl = '../../../../../assets/Medico_home_default.png';
        } else {
          // Use the extracted filename as the image path
          this.imagenUrl = `../../../../../assets/${filename}`;
        }
      },

      error: (error) => {
        console.error('Error fetching especialista: ', error);
        // Error handler
      }

    });

  }
}
