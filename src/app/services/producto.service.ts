import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  service: string;

  constructor(private http: HttpClient) {
    this.service = 'https://api-qa.bupa.cl/aeolabs/qa/camp/listarproductos';
    // this.service = 'http://localhost:5000/api/productos';
  }

  getProductos(): Observable<any> {
    return this.http.get(this.service);
  }
}
