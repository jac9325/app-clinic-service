import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CitaMedicaService } from '../../../Services/ServicesCitaMedica/CitaMedica.service';
import { loadCantidadCitaMedica, loadListCitaMedica } from '../../../States/Cita/cita.actions';
import { selectConsultorioPrivado, selectUsuarioInstitucionEspecialista } from '../../../States/Login/login.selector';
import { AppState } from '../../../States/app.state';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.sass'
})

export class LoaderComponent implements OnInit {

  /* Variables necesarias */
  idConsultorioPrivado:number;
  idUsuarioIE: number;
  currentDate:Date = new Date();
  constructor(
    private store:Store<AppState>,
    private citaMedicaService:CitaMedicaService,
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.getDataFromStore();
  }

  getDataFromStore() {
    this.store.select(selectUsuarioInstitucionEspecialista).subscribe({
      next: (usuarioItem) => {
        this.idUsuarioIE = usuarioItem.id_usuario_institucion_especialista;
        this.getConsultorioPrivado();
      },
      error: (error) => {
        console.error('Error getting usuarioItem:', error);
      }
    });
  }
  

  getConsultorioPrivado() {
    this.store.select(selectConsultorioPrivado).subscribe({
        next: (consultorioItem) => {
          this.idConsultorioPrivado = consultorioItem.id_consultorio_privado;
          this.chargeApi();
        },
        error:(error) => {
          console.error('Error getting consultorioItem:', error);
        }
    });
  }
  chargeApi(){
    this.citaMedicaService.ChargeListCitaMedicaResponse(this.idConsultorioPrivado, this.idUsuarioIE, this.currentDate).subscribe({
      next: (item:any)=>{
        console.log("este es el objeto");
        console.log(item);
        this.store.dispatch(loadListCitaMedica({citaMedica:item.data.citaMedicaResponse}));
        this.store.dispatch(loadCantidadCitaMedica({cantidadCita: item.data.cantidadCitas}))
        this.redirectToDashboard();
      }
    });
 }
 redirectToDashboard() {
  this.router.navigate(['']);
}
}
