import { Injectable } from '@angular/core';
import { TokenDecode } from '../../Models/Dto/TokenDecode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  decodificarToken(token: string): TokenDecode {
    try {
        
        return null;
    } catch (error) {
      console.error('Error decodificando el token:', error);
      return null;  // Manejar el token inválido de forma elegante
    }
  }
}
