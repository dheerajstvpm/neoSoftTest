import { Routes } from '@angular/router';
import { DatatableComponent } from './components/datatable/datatable.component';

export const routes: Routes = [
  { path: '', component: DatatableComponent, pathMatch: 'full' }
];
