import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interface/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}
  private API_STRING = 'http://localhost:8080/productos';
  //POST
  postProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.API_STRING}/guardar`, producto);
  }
  //Get
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.API_STRING}/leer`);
  }
  //Delete
  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_STRING}/eliminar/${id}`);
  }
}
