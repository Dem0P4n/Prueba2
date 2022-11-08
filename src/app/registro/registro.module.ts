import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../servicio/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroPage],
  providers: [UsuarioService]
})
export class RegistroPageModule {}
