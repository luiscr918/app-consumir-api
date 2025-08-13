import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  constructor(private productoServicio: ProductosService) {}

  nombre: string = '';
  precio: number = 0;
  stock: number = 0;
  guardar = (formulario: any) => {
    this.productoServicio.postProducto(formulario.value).subscribe(() => {
      alert("Producto agregado correctamente")
      window.location.reload();
    });
  };
}
