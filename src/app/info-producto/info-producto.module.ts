import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoProductoPageRoutingModule } from './info-producto-routing.module';

import { InfoProductoPage } from './info-producto.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from '../servicio/producto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoProductoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [InfoProductoPage],
  providers: [ProductoService]
})
export class InfoProductoPageModule {}
