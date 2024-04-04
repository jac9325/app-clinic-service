export class ConsultorioPrivadoDTO{
    id_consultorio_privado: number;
    nombre: string;
    representante_legal: string;
    ruc: string;
    razon_social: string;
    codigo_consultorio: string;
    capacidad:number;
    estado:number;
    fecha_creacion: Date;
    fecha_modificacion: Date;
    latitud: string;
    altitud: string;
    foto_portada: string;
    id_usuario: number;
    id_ubicacion_geografica: number;
    correoElectronico: string;
    numero_historia_clinica:number;
}