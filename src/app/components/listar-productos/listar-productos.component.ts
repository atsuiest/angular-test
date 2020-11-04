import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../services/producto.service";
import { Producto } from "../../models/producto.model";

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  productos: Producto[];

  constructor(private ProductoSvc: ProductoService) {
    this.productos = new Array<Producto>();
  }

  ngOnInit() {
    this.getProductos();
  }

  async getProductos() {
    this.ProductoSvc.getProductos().subscribe((data: any) => {
      this.productos = data
      console.log(this.productos);
    }, err => {
      console.log(err)
    })

  }
}
