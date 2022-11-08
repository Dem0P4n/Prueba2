import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPrincipalPageRoutingModule } from './pagina-principal-routing.module';

import { PaginaPrincipalPage } from './pagina-principal.page';
import { ProductoService } from '../servicio/producto.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPrincipalPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [PaginaPrincipalPage],
  providers: [ProductoService]
})
export class PaginaPrincipalPageModule {}
