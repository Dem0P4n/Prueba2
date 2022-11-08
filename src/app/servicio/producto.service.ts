import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoConID } from '../modelo/producto';

@Injectable()
export class ProductoService {

  private URL_PRODUCTO = "https://dummyjson.com/auth/products?skip=0";
  private URL_PRODUCTO2 = "https://dummyjson.com/auth/products";

  constructor(

    private cliente: HttpClient
  ) {

   }

   public obtenerPrimerosProductos(): Observable<any>{
     return this.cliente.get(this.URL_PRODUCTO,{
       headers: {
         'Content-Type': 'aplication/json?charset=utf-8'
       }
     })

   }

   public obtenerProductoPorID(id: number): Observable<ProductoConID>{
     return this.cliente.get<ProductoConID | null>(`${this.URL_PRODUCTO2}/${id}`)
   }


}
