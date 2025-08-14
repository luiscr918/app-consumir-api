import { Routes } from '@angular/router';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
import { FormularioActualizarComponent } from './components/formulario-actualizar/formulario-actualizar.component';

export const routes: Routes = [
  { path: '', component: ProductosPageComponent },
  { path: 'actualizar-producto/:id', component: FormularioActualizarComponent },
];
