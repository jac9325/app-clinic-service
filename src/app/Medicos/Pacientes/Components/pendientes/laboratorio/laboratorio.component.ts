import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'laboratorio',
  standalone: true,
  imports: [ RouterModule, FontAwesomeModule, FormsModule, CommonModule ],
  templateUrl: './laboratorio.component.html',
  styleUrl: './laboratorio.component.sass'
})
export class LaboratorioComponent {

  fileToUpload: File = null;
  uploadDate: Date = null;
  fileName: string = '--';

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadDate = new Date();
    this.fileName = this.fileToUpload ? this.fileToUpload.name : '--';
  }

  openPdf() {
    if (this.fileToUpload) {
      const fileURL = URL.createObjectURL(this.fileToUpload);
      window.open(fileURL, '_blank');
    }
  }

  truncateFileName(fileName: string): string {
    return fileName.length > 15 ? fileName.substring(0, 12) + '...' : fileName;
  }

  removeFile() {
    this.fileToUpload = null;
    this.uploadDate = null;
    this.fileName = '--';
  }

}
