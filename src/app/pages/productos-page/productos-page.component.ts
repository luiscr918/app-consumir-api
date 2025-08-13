import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-productos-page',
  standalone: true,
  imports: [FormularioComponent, TablaComponent],
  templateUrl: './productos-page.component.html',
  styleUrl: './productos-page.component.css'
})
export class ProductosPageComponent {

}
