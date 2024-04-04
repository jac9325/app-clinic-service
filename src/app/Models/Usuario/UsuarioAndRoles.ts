export class UsuarioAndRoles{
    id_usuario:number;
    username:string;
    correo:string;
    estado:number;
    numero:string;
    numero_confirmado:number;
    estado_confirmacion:number;
    correo_confirmado:number;
    codigo_pais:string;
    es_interno:number;
    rols: Rol[];
    rolesSend: RolesSend;
}

export class Rol{
    id_rol:number;
    nombre:string;
    estado:number;
}

export class RolesSend{
    role_COLABORADOR: number;
    role_USER: number;
    role_CAJERO: number;
    role_ADMIN: number;
    role_USUARIO_INSTITUCION_ESPECIAL: number
}