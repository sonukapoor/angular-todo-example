import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { StructuredFormComponent } from './structured-form/structured-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    GenericInputComponent,
    StructuredFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
