import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class ExportPdfService {

  constructor() { }

  public exportarRecetaMedicaAPDF(datosTabla: any[], nombreArchivo: string) {
    const doc = new jsPDF();

    // Añade la tabla al documento
    autoTable(doc, {
      theme: 'striped',
      head: [['Fármaco', 'Concentración', 'Frecuencia']],
      body: datosTabla,
      styles: {
        halign: 'center', // Alineación horizontal del texto
        valign: 'middle', // Alineación vertical del texto
      },
      headStyles: {
        fillColor: [61, 130, 219], // Fondo azul para los encabezados
        textColor: [255, 255, 255], // Texto blanco para los encabezados
        fontSize: 13, // Tamaño de letra para los encabezados
      },
      bodyStyles: {
        textColor: [0, 0, 0], // Texto negro para el cuerpo
        fontSize: 12, // Tamaño de letra para el cuerpo
      },
      alternateRowStyles: {
        fillColor: [220, 220, 220] // Color de fondo para las filas alternas
      },
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
    });

    // Guarda el PDF
    doc.save(nombreArchivo);
  }


  public exportarExamenComplementarioAPDF(datosExamenComplementario: any[], nombreArchivo: string) {
    const doc = new jsPDF();

    // Añade la tabla de exámenes complementarios al documento
    autoTable(doc, {
      theme: 'striped',
      head: [['Laboratorio', 'Imagen', 'Patología']],
      body: datosExamenComplementario,
      styles: {
        halign: 'center',
        valign: 'middle',
      },
      headStyles: {
        fillColor: [61, 130, 219],
        textColor: [255, 255, 255],
        fontSize: 13,
      },
      bodyStyles: {
        textColor: [0, 0, 0],
        fontSize: 12,
      },
      alternateRowStyles: {
        fillColor: [220, 220, 220]
      },
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
    });

    // Guarda el PDF
    doc.save(nombreArchivo);
  }

  public exportarAmbasTablasAPDF(datosRecetaMedica: any[], datosExamenComplementario: any[], nombreArchivo: string) {
    const doc = new jsPDF();

    // Exporta la tabla de recetas médicas
    autoTable(doc, {
      theme: 'striped',
      head: [['Fármaco', 'Concentración', 'Frecuencia']],
      body: datosRecetaMedica,
      styles: {
        halign: 'center', // Alineación horizontal del texto
        valign: 'middle', // Alineación vertical del texto
      },
      headStyles: {
        fillColor: [61, 130, 219], // Fondo azul para los encabezados
        textColor: [255, 255, 255], // Texto blanco para los encabezados
        fontSize: 13, // Tamaño de letra para los encabezados
      },
      bodyStyles: {
        textColor: [0, 0, 0], // Texto negro para el cuerpo
        fontSize: 12, // Tamaño de letra para el cuerpo
      },
      alternateRowStyles: {
        fillColor: [220, 220, 220] // Color de fondo para las filas alternas
      },
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
    });

    // Añade un salto de página
    doc.addPage();

    // Exporta la tabla de exámenes complementarios
    autoTable(doc, {
      theme: 'striped',
      head: [['Laboratorio', 'Imagen', 'Patología']],
      body: datosExamenComplementario,
      styles: {
        halign: 'center',
        valign: 'middle',
      },
      headStyles: {
        fillColor: [61, 130, 219],
        textColor: [255, 255, 255],
        fontSize: 13,
      },
      bodyStyles: {
        textColor: [0, 0, 0],
        fontSize: 12,
      },
      alternateRowStyles: {
        fillColor: [220, 220, 220]
      },
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
    });

    // Guarda el PDF
    doc.save(nombreArchivo);
  }
}