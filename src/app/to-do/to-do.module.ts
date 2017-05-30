import { ToDoActions } from './store/to-do.actions';
import { ToDoInputComponent } from './todo-input/to-do-input.component';
import { ToDoContainerComponent } from './to-do-container/to-do-container.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do/to-do.component';
import { AppStore } from './store/to-do.store';

import { ServerService } from './server.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.provideStore(AppStore)
  ],
  declarations: [
    ToDoContainerComponent,
    ToDoListComponent,
    ToDoInputComponent,
    ToDoComponent
  ],
  exports: [ToDoContainerComponent],
  providers: [ServerService, ToDoActions]
})
export class ToDoModule { }
