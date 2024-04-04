import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Injectable({
  providedIn: 'root'
})
export class ExportPdfService {

  constructor() { }

  public exportarRecetaMedicaAPDF(datosTabla: any[]) {

    const documentDefinition = {
      content: [
        { text: 'Receta Médica', fontSize: 18, bold: true, margin: [0, 0, 0, 10], alignment: 'center' },
        '\n\n',
        {
          columns: [
            {
              width: 200,
              text: ' ', // Reemplaza con la imagen real
              alignment: 'center',
            },
            {
              width: '*',
              text: [
                { text: 'Dr. Juan Rodríguez Alcázar\n', fontSize: 14, bold: true },
                'Médico Internista\n\n',
                { text: 'Cédula Profesional: ', bold: true },
                '21622165 1265',
              ],
              alignment: 'center',
            },
          ],
        },
        // Espacio entre secciones
        '\n\n',
        // Sección 2: Datos del paciente
        {
          width: '100%',
          text: [
            { text: 'Paciente\n\n', fontSize: 15, bold: true },
          ],
        },
        {
          columns: [
            {
              width: 400,
              text: [
                { text: 'Nombre: ', fontSize: 13, bold: true },
                'Nombre del paciente',
              ],
              alignment: 'left',
            },
            {
              width: '*',
              text: [
                { text: 'Sexo: ', fontSize: 13, bold: true },
                'M',
              ],
              alignment: 'left',
            },
          ],
        },

        {
          columns: [
            {
              width: 200,
              text: [
                { text: 'Edad: ', fontSize: 13, bold: true },
                '36 años',
              ],
              alignment: 'left',
            },
            {
              width: 180,
              text: [
                { text: 'Peso: ', fontSize: 13, bold: true },
                '65 Kg.',
              ],
              alignment: 'left',
            },
            {
              width: 140,
              text: [
                { text: 'Altura: ', fontSize: 13, bold: true },
                '164 cm.',
              ],
              alignment: 'left',
            },
          ],
        },
        // Espacio entre secciones
        '\n\n',
        // Tabla de datos
        {
          width: '100%',
          text: [
            { text: 'RC:\n', fontSize: 15, bold: true },
          ],
        },
        {
          table: {
            headerRows: 1,
            widths: [160, 160, 160],
            body: [
              ['Fármaco', 'Concentración', 'Frecuencia'],
              ...datosTabla,
            ],
          },
          layout: 'lightHorizontalLines',
          style: 'tableStyle',
        },
        // Espacio entre secciones
        '\n\n',
        '\n\n',
        '\n\n',
        {
          columns: [
            {
              width: '*',
              text: [
                { text: 'Fecha: ', fontSize: 13, bold: true },
                '15/04/2024',
              ],
              alignment: 'center',
            },
            {
              width: '*',
              text: [
                { text: '_____________________________\n', fontSize: 13, bold: true },
                { text: 'Firma', fontSize: 13, bold: true },
              ],
              alignment: 'center',
            },
          ],
        },
      ],
      styles: {
        tableStyle: {
          fontSize: 12,
          noWrap: false, // Permite que el texto se divida en varias líneas
        },
        header: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
      },
    };
    
    // Crea el PDF
    pdfMake.createPdf(documentDefinition).open(); // Abre el PDF en una nueva ventana
  }


  public exportarExamenComplementarioAPDF(datosExamenComplementario: any[]) {
    const documentDefinition = {
      content: [
        { text: 'Orden Para Exámenes Complementarios', fontSize: 18, bold: true, margin: [0, 0, 0, 10], alignment: 'center' },
        '\n\n',
        {
          columns: [
            {
              width: 200,
              text: ' ', // Reemplaza con la imagen real
              alignment: 'center',
            },
            {
              width: '*',
              text: [
                { text: 'Dr. Juan Rodríguez Alcázar\n', fontSize: 14, bold: true },
                'Médico Internista\n\n',
                { text: 'Cédula Profesional: ', bold: true },
                '21622165 1265',
              ],
              alignment: 'center',
            },
          ],
        },
        // Espacio entre secciones
        '\n\n',
        // Sección 2: Datos del paciente
        {
          width: '100%',
          text: [
            { text: 'Paciente\n\n', fontSize: 15, bold: true },
          ],
        },
        {
          columns: [
            {
              width: 400,
              text: [
                { text: 'Nombre: ', fontSize: 13, bold: true },
                'Nombre del paciente',
              ],
              alignment: 'left',
            },
            {
              width: '*',
              text: [
                { text: 'Sexo: ', fontSize: 13, bold: true },
                'M',
              ],
              alignment: 'left',
            },
          ],
        },

        {
          columns: [
            {
              width: 200,
              text: [
                { text: 'Edad: ', fontSize: 13, bold: true },
                '36 años',
              ],
              alignment: 'left',
            },
            {
              width: 180,
              text: [
                { text: 'Peso: ', fontSize: 13, bold: true },
                '65 Kg.',
              ],
              alignment: 'left',
            },
            {
              width: 140,
              text: [
                { text: 'Altura: ', fontSize: 13, bold: true },
                '164 cm.',
              ],
              alignment: 'left',
            },
          ],
        },
        // Espacio entre secciones
        '\n\n',
        // Tabla de datos
        {
          width: '100%',
          text: [
            { text: 'RC:\n', fontSize: 15, bold: true },
          ],
        },
        {
          table: {
            headerRows: 1,
            widths: [160, 160, 160],
            body: [
              ['Laboratorio', 'Imágen', 'Patología'],
              ...datosExamenComplementario,
            ],
          },
          layout: 'lightHorizontalLines',
          style: 'tableStyle',
        },
        // Espacio entre secciones
        '\n\n',
        '\n\n',
        '\n\n',
        {
          columns: [
            {
              width: '*',
              text: [
                { text: 'Fecha: ', fontSize: 13, bold: true },
                '15/04/2024',
              ],
              alignment: 'center',
            },
            {
              width: '*',
              text: [
                { text: '_____________________________\n', fontSize: 13, bold: true },
                { text: 'Firma', fontSize: 13, bold: true },
              ],
              alignment: 'center',
            },
          ],
        },
      ],
      styles: {
        tableStyle: {
          fontSize: 12,
          noWrap: false, // Permite que el texto se divida en varias líneas
        },
        header: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
      },
    };
    
    // Crea el PDF
    pdfMake.createPdf(documentDefinition).open(); // Abre el PDF en una nueva ventana
  }

  public exportarAmbasTablasAPDF(datosRecetaMedica: any[], datosExamenComplementario: any[]) {
    const documentDefinition = {
      content: [
        { text: 'Receta Médica', fontSize: 18, bold: true, margin: [0, 0, 0, 10], alignment: 'center' },
        '\n\n',
        {
          columns: [
            {
              width: 200,
              text: ' ', // Reemplaza con la imagen real
              alignment: 'center',
            },
            {
              width: '*',
              text: [
                { text: 'Dr. Juan Rodríguez Alcázar\n', fontSize: 14, bold: true },
                'Médico Internista\n\n',
                { text: 'Cédula Profesional: ', bold: true },
                '21622165 1265',
              ],
              alignment: 'center',
            },
          ],
        },
        // Espacio entre secciones
        '\n\n',
        // Sección 2: Datos del paciente
        {
          width: '100%',
          text: [
            { text: 'Paciente\n\n', fontSize: 15, bold: true },
          ],
        },
        {
          columns: [
            {
              width: 400,
              text: [
                { text: 'Nombre: ', fontSize: 13, bold: true },
                'Nombre del paciente',
              ],
              alignment: 'left',
            },
            {
              width: '*',
              text: [
                { text: 'Sexo: ', fontSize: 13, bold: true },
                'M',
              ],
              alignment: 'left',
            },
          ],
        },

        {
          columns: [
            {
              width: 200,
              text: [
                { text: 'Edad: ', fontSize: 13, bold: true },
                '36 años',
              ],
              alignment: 'left',
            },
            {
              width: 180,
              text: [
                { text: 'Peso: ', fontSize: 13, bold: true },
                '65 Kg.',
              ],
              alignment: 'left',
            },
            {
              width: 140,
              text: [
                { text: 'Altura: ', fontSize: 13, bold: true },
                '164 cm.',
              ],
              alignment: 'left',
            },
          ],
        },
        // Espacio entre secciones
        '\n\n',
        // Tabla de datos
        {
          width: '100%',
          text: [
            { text: 'RC:\n', fontSize: 15, bold: true },
          ],
        },
        {
          table: {
            headerRows: 1,
            widths: [160, 160, 160],
            body: [
              ['Fármaco', 'Concentración', 'Frecuencia'],
              ...datosRecetaMedica,
            ],
          },
          layout: 'lightHorizontalLines',
          style: 'tableStyle',
        },
        // Espacio entre secciones
        '\n\n',
        '\n\n',
        '\n\n',
        {
          columns: [
            {
              width: '*',
              text: [
                { text: 'Fecha: ', fontSize: 13, bold: true },
                '15/04/2024',
              ],
              alignment: 'center',
            },
            {
              width: '*',
              text: [
                { text: '_____________________________\n', fontSize: 13, bold: true },
                { text: 'Firma', fontSize: 13, bold: true },
              ],
              alignment: 'center',
            },
          ],
        },
        // Salto de página
        { text: '\n', pageBreak: 'after' },

        { text: 'Orden Para Exámenes Complementarios', fontSize: 18, bold: true, margin: [0, 0, 0, 10], alignment: 'center' },
        '\n\n',
        {
          columns: [
            {
              width: 200,
              text: ' ', // Reemplaza con la imagen real
              alignment: 'center',
            },
            {
              width: '*',
              text: [
                { text: 'Dr. Juan Rodríguez Alcázar\n', fontSize: 14, bold: true },
                'Médico Internista\n\n',
                { text: 'Cédula Profesional: ', bold: true },
                '21622165 1265',
              ],
              alignment: 'center',
            },
          ],
        },
        // Espacio entre secciones
        '\n\n',
        // Sección 2: Datos del paciente
        {
          width: '100%',
          text: [
            { text: 'Paciente\n\n', fontSize: 15, bold: true },
          ],
        },
        {
          columns: [
            {
              width: 400,
              text: [
                { text: 'Nombre: ', fontSize: 13, bold: true },
                'Nombre del paciente',
              ],
              alignment: 'left',
            },
            {
              width: '*',
              text: [
                { text: 'Sexo: ', fontSize: 13, bold: true },
                'M',
              ],
              alignment: 'left',
            },
          ],
        },

        {
          columns: [
            {
              width: 200,
              text: [
                { text: 'Edad: ', fontSize: 13, bold: true },
                '36 años',
              ],
              alignment: 'left',
            },
            {
              width: 180,
              text: [
                { text: 'Peso: ', fontSize: 13, bold: true },
                '65 Kg.',
              ],
              alignment: 'left',
            },
            {
              width: 140,
              text: [
                { text: 'Altura: ', fontSize: 13, bold: true },
                '164 cm.',
              ],
              alignment: 'left',
            },
          ],
        },
        // Espacio entre secciones
        '\n\n',
        // Tabla de datos
        {
          width: '100%',
          text: [
            { text: 'RC:\n', fontSize: 15, bold: true },
          ],
        },
        {
          table: {
            headerRows: 1,
            widths: [160, 160, 160],
            body: [
              ['Laboratorio', 'Imágen', 'Patología'],
              ...datosExamenComplementario,
            ],
          },
          layout: 'lightHorizontalLines',
          style: 'tableStyle',
        },
        // Espacio entre secciones
        '\n\n',
        '\n\n',
        '\n\n',
        {
          columns: [
            {
              width: '*',
              text: [
                { text: 'Fecha: ', fontSize: 13, bold: true },
                '15/04/2024',
              ],
              alignment: 'center',
            },
            {
              width: '*',
              text: [
                { text: '_____________________________\n', fontSize: 13, bold: true },
                { text: 'Firma', fontSize: 13, bold: true },
              ],
              alignment: 'center',
            },
          ],
        },
      ],
      styles: {
        tableStyle: {
          fontSize: 12,
          noWrap: false, // Permite que el texto se divida en varias líneas
        },
        header: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
      },
    };
    
    // Crea el PDF
    pdfMake.createPdf(documentDefinition).open(); // Abre el PDF en una nueva ventana
  }
}