import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule aquí
import { ExportPdfService } from '../../../../Services/export-pdf/export-pdf.service'; 


@Component({
  selector: 'receta',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.sass'
})

export class RecetaComponent implements OnInit {
  form!: FormGroup;

  constructor(private exportPdfService: ExportPdfService) {}

  ngOnInit() {
    this.form = new FormGroup({
      rows: new FormArray([])
    });
    this.addRow();
  }

  get rows(): FormArray {
    return this.form.get('rows') as FormArray;
  }

  get formRows(): FormGroup[] {
    return this.rows.controls as FormGroup[];
  }

  addRow() {
    // Comprueba si hay filas existentes
    if (this.rows.length > 0) {
      const lastRow = this.rows.at(this.rows.length - 1) as FormGroup;
      // Si la última fila está llena, añade una nueva fila
      if (this.isRowFilled(lastRow)) {
        const row = this.createRow();
        this.rows.push(row);
      }
    } else {
      // Si no hay filas existentes, añade la primera fila
      const row = this.createRow();
      this.rows.push(row);
    }
  }

  createRow(): FormGroup {
    return new FormGroup({
      farmaco: new FormControl(''),
      concentracion: new FormControl(''),
      frecuencia: new FormControl('')
    });
  }

  isRowFilled(row: FormGroup): boolean {
    return Object.values(row.controls).every(control => control.value);
  }


  getTableData(): any[] {
    return this.formRows.map(row => [
      row.get('farmaco')?.value || '', 
      row.get('concentracion')?.value || '', 
      row.get('frecuencia')?.value || ''
    ]);
  }

}