import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DateContent {
  date: string;
  content: { title: string; image: string; description: string ; isNew: boolean, isImageSelected: boolean}[];
}

interface Content {
  title: string;
  image: string;
  description: string;
  isNew?: boolean;
  isImageSelected?: boolean;
}

@Component({
  selector: 'patologias',
  standalone: true,
  imports: [ NgbNavModule, NgbAccordionModule, CommonModule, FormsModule  ],
  templateUrl: './patologias.component.html',
  styleUrl: './patologias.component.sass'
})
export class PatologiasComponent {
  private modalService = inject(NgbModal);
  currentImage: string = '';
  dates: DateContent[] = [
    {
      date: '23/10/2023',
      content: [
        {
          title: 'Radiografia',
          image: '../../../../../../assets/Xray.jpg',
          description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.',
          isNew: false,
          isImageSelected: true
        },
        // Más contenido aquí...
      ]
    },
    // Más fechas aquí...
  ];
  selectedDate: DateContent = this.dates[0];

  openFullscreen(content: TemplateRef<any>, image: string) {
    this.currentImage = image;
    this.modalService.open(content, { fullscreen: true });
  }

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
      image: '',
      description: '',
      isNew: true,
      isImageSelected: false
    });
  }

  uploadImage(event: Event, content: Content) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        content.image = reader.result as string;
        content.isImageSelected = true;
      };
      reader.readAsDataURL(file);
    }
  }

  removeContent(index: number) {
    this.selectedDate.content.splice(index, 1);
  }

  isImageLoaded(content: Content) {
    return content && content.image && content.image !== '';
  }
}