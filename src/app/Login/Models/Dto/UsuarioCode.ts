export interface UsuarioCode {
    usuario: UsuarioGetDto;
    code: number;
  }
  
  export interface UsuarioGetDto {
    id_usuario: number;
    usuario_access: string;
    id_perfil_usuario: number;
    correo: string;
    estado: number;
  }