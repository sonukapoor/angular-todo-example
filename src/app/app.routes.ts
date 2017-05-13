import { ClientsComponent } from './clients/clients.component';
import { MissionComponent } from './mission/mission.component';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';

export const routeConfig: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: ToDoPageComponent },
  { path: 'todo-details/:id', component: ToDoDetailsComponent },
  {
    path: 'about', component: AboutComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'mission', component: MissionComponent },
      { path: 'clients', component: ClientsComponent }
    ]
  },
  { path: 'contact', component: ContactComponent }
];
