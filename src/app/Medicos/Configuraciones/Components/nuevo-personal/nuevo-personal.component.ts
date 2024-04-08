import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'nuevo-personal',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './nuevo-personal.component.html',
  styleUrl: './nuevo-personal.component.sass'
})
export class NuevoPersonalComponent {

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

}
