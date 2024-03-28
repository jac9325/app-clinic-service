
export class UsuarioCode {
    usuario: UsuarioGetDto;
    code: number;
  }
  
  export class UsuarioGetDto {
    id_usuario: number;
    username: string;
    correo: string;
    estado: number;
    numero: string;
    numero_confirmado: number;
    estado_confirmacion:number;
    correo_confirmado:number;
    codigo_pais:string;
    es_interno:number;
    roles: Rol[];
  }

  export class Rol{
    id_rol :number;
    nombre :string;
    estado :number;
  }