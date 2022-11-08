import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ProductoConID } from '../modelo/producto';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {
  @ViewChild(IonInfiniteScroll)
public productos: Array<ProductoConID>
  constructor(
    private apiProducto: ProductoService,
    private scroll: IonInfiniteScroll
  ) { }

  ngOnInit() {
    this.apiProducto.obtenerPrimerosProductos().subscribe(datos => {
      if(datos){
        this.productos = datos
      }
    })
  }

}
