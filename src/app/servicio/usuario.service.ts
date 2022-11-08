import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';

@Injectable()
export class UsuarioService {
  private URL_USUARIO = "https://dummyjson.com/users/add"
  constructor(
    private cliente: HttpClient
  ) {


  }

  public agregarUsuario(usuario: Usuario){
    this.cliente.post(this.URL_USUARIO,usuario,{
      headers: {
        'Content-Type': 'aplication/json?charset=utf-8'
      }
    })
  }

}
