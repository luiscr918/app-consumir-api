import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosPageComponent } from "./pages/productos-page/productos-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductosPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-consumir-api';
}
