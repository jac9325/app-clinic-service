import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { ProfilePhotoComponent } from '../profile-photo/profile-photo.component';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-filiacion',
  standalone: true,
  imports: [BackgroundComponent, ProfilePhotoComponent, AlertComponent],
  templateUrl: './filiacion.component.html',
  styleUrl: './filiacion.component.sass'
})
export class FiliacionComponent {

}
