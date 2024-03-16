import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DateContent {
  date: string;
  content: { title: string; prequirurgico: string; posquirurgico: string; procedimientos: string ; hallazgos: string; isNew: boolean}[];
}

interface Content {
  title: string;
  prequirurgico: string;
  posquirurgico: string;
  procedimientos: string ;
  hallazgos: string;
  isNew?: boolean;
}


@Component({
  selector: 'procedimientos-quirurgicos',
  standalone: true,
  imports: [ NgbNavModule, NgbAccordionModule, CommonModule, FormsModule ],
  templateUrl: './procedimientos-quirurgicos.component.html',
  styleUrl: './procedimientos-quirurgicos.component.sass'
})

export class ProcedimientosQuirurgicosComponent {
  dates: DateContent[] = [
    {
      date: '23/10/2023',
      content: [
        {
          title: 'Radiografia',
          prequirurgico: "preguirurgico1",
          posquirurgico: "posguirurgico1",
          procedimientos: "procedimientos1",
          hallazgos: "hallazgos1",
          isNew: false,
        },
        // Más contenido aquí...
      ]
    },
    // Más fechas aquí...
  ];
  selectedDate: DateContent = this.dates[0];

  selectDate(date: DateContent) {
    this.selectedDate = date;
  }

  addDate() {
    const today = new Date();
    const dateString = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    this.dates.unshift({
      date: dateString,
      content: []
    });
    this.selectedDate = this.dates[0];
  }

  addContent() {
    this.selectedDate.content.push({
      title: '',
      prequirurgico: '',
      posquirurgico: '',
      procedimientos: '',
      hallazgos: '',
      isNew: true
    });
  }

  removeContent(index: number) {
    this.selectedDate.content.splice(index, 1);
  }
}
