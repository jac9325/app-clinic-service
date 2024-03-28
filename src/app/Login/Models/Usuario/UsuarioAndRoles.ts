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
}

export class Rol{
    id_rol:number;
    nombre:string;
    estado:number;
}