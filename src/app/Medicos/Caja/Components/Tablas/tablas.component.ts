import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaIngresosComponent } from './tabla-ingresos/tabla_ingresos.component';
import { TablaEgresosComponent } from './tabla-egresos/tabla_egresos.component';

@Component({
  selector: 'tablas',
  standalone: true,
  imports: [ RouterModule, NgbNavModule, TablaIngresosComponent, TablaEgresosComponent ],
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.sass'
})
export class TablasComponent  {

  constructor(config: NgbNavConfig) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
	}

  private _active = 1;

  @Input() set active(val: number) {
    if (val !== this._active) {
      this._active = val;
      this.activeChange.emit(this._active);
    }
  }

  get active(): number {
    return this._active;
  }

  @Output() activeChange = new EventEmitter<number>();

  setActive(valor: number) {
    this.active = valor;
    // No es necesario emitir aquí ya que el setter de 'active' se encarga de eso.
  }

}