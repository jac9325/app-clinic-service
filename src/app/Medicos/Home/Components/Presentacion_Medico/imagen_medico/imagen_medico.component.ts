import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImagenMedicoService } from './Services/imagen_medico.service';


@Component({
  selector: 'imagen-medico',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './imagen_medico.component.html',
  styleUrl: './imagen_medico.component.sass'
})
export class ImagenMedicoComponent {
  imagenUrl: string = '../../../../../assets/Medico_home_default.png'; // Valor por defecto src\assets\Medico_home_default.png

    constructor(private imagenMedicoService: ImagenMedicoService) { }

  ngOnInit(): void {
    this.obtenerImagen();
  }

  obtenerImagen(): void {
    //id : id_usuario_institucion_especialista
    const id = 2;

    this.imagenMedicoService.getImagePath(id).subscribe({
        next: (response) => {
          const filename = response.substring(response.lastIndexOf('\\') + 1);
          this.imagenUrl = `../../../../../assets/${filename}` || '../../../../../assets/Medico_home_default.png';
        },
        error: (error) => {
            console.error('Error fetching image path:', error);
            // Handle error
        }
    } );
  }
}
