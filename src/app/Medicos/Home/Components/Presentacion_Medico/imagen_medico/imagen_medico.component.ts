import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'imagen-medico',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './imagen_medico.component.html',
  styleUrl: './imagen_medico.component.sass'
})
export class ImagenMedicoComponent {
  imagenUrl: string = '../../../../../assets\Medico_home_default.png'; // Valor por defecto src\assets\Medico_home_default.png

  constructor() { }

  ngOnInit(): void {
    this.obtenerImagen();
  }

  // Suponiendo que tienes un método para obtener la URL de la imagen desde el backend
  obtenerImagen() {
    // Aquí iría la lógica para obtener la URL de la imagen del backend
    // Y asignarla a la variable 'imagenUrl'
    this.imagenUrl = 'url_de_la_imagen'; // Esto es solo un ejemplo, deberías reemplazarlo con el valor obtenido del backend
  }
}
