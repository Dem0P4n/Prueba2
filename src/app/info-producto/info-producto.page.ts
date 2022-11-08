import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoConID } from '../modelo/producto';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.page.html',
  styleUrls: ['./info-producto.page.scss'],
})
export class InfoProductoPage implements OnInit {
  public idActiva: number;
  public productoActivo: ProductoConID;
  constructor(
    private apiProducto: ProductoService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit() {

    this.rutaActiva.params.subscribe(parametros => {
      this.idActiva = parametros.id;
      this.apiProducto.obtenerProductoPorID(this.idActiva).subscribe(producto => {
        this.productoActivo = producto

      })
    })



  }

}
