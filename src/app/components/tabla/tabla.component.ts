import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interface/producto';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  constructor(private servicioProducto: ProductosService) {}

  productos: Producto[] = [];

  ngOnInit() {
    this.servicioProducto.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }
  eliminar = (id: number) => {
    this.servicioProducto.deleteProducto(id).subscribe({
      next: () => {
        alert('producto eliminado correctamente');
        window.location.reload();
      },
      error:(error)=>{
        console.log(error);
        alert("Error al eliminar el producto")
        
      }
    });
  };
}
