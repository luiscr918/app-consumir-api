import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../interface/producto';

@Component({
  selector: 'app-formulario-actualizar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-actualizar.component.html',
  styleUrl: './formulario-actualizar.component.css',
})
export class FormularioActualizarComponent {
  constructor(
    private servicioProducto: ProductosService,
    private router: Router,
    private ruta: ActivatedRoute
  ) {}
  id: number = 0;
  producto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0,
  };
  ngOnInit(): void {
    this.ruta.params.subscribe((params) => {
      this.id = params['id'];
      this.servicioProducto.buscarProductoId(this.id).subscribe({
        next: (data) => {
          this.producto = data;
        },
        error: (err) => {
          console.log('Error al cargar el producto', err);
        },
      });
    });
  }
  editarProducto(id: number, producto: Producto) {
    this.servicioProducto.actualizarProducto(id, producto).subscribe({
      next: () => {
        alert('Producto actualizado correctamente');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log('Error al actualizar bd', err);
      },
    });
  }
}
