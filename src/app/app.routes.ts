import { Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FancyListComponent } from './fancy-list/fancy-list.component';

export const routeConfig: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: '/todo', component: ToDoListComponent },
  { path: '/fancy', component: FancyListComponent }
];
