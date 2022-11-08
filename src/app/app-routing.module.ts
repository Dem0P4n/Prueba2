import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'principal',
    loadChildren: () => import('./pagina-principal/pagina-principal.page').then( m => m.PaginaPrincipalPage)
  },
  {
    path:'pagina-principal/info-producto/:id',
    loadChildren: () => import('./info-producto/info-producto.page').then(m => m.InfoProductoPage)
  },
  {
    path: '',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
