export class Usuario{
    id_usuario?: number;
    usuario_access?: string;
    estado?: number;
    password_access?: string;
    perfil_usuario?: number;
    correo_confirmado?: number;
    numero?: string;
    correo?: string;
    numero_confirmado?: number;
    estado_confirmacion?: number;
    codigo_verificacion_correo?: string;
    codigo_verificacion_numero?: string;
    codigo_pais?: string;
    fecha_expiracion_token?: Date;
    es_interno?: number;
}