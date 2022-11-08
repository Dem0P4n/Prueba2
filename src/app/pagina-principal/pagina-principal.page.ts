import { Component, OnInit } from '@angular/core';
import { ProductoConID } from '../modelo/producto';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {
public productos: Array<ProductoConID>
  constructor(
    private apiProducto: ProductoService
  ) { }

  ngOnInit() {
    this.apiProducto.obtenerPrimerosProductos().subscribe({})
  }

}
