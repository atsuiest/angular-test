import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListarProductosComponent } from "./components/listar-productos/listar-productos.component";

const routes: Routes = [
  { path: 'productos/listar', component: ListarProductosComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }