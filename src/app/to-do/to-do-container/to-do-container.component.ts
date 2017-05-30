import { Observable } from 'rxjs/Observable';
import { ToDoActions } from './../store/to-do.actions';
import { AppState } from './../store/to-do.store';
import { ServerService } from '../server.service';
import { IToDoItem } from '../to-do.type';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.css']
})
export class ToDoContainerComponent implements OnInit {

  todoItems: IToDoItem[];

  constructor(
    private serverService: ServerService,
    private store: Store<AppState>,
    private todoActions: ToDoActions
  ) {
    store.select('todoItems').subscribe((items: IToDoItem[]) => {
      this.todoItems = items;
    });

  }

  ngOnInit() {
  }

  addItem(description: string) {
    const item: IToDoItem = {
      description,
      completed: false,
      id: this.todoItems.length
    };

    this.store.dispatch(this.todoActions.addItem(item));
  }

  onCompleteChange(todoItem: IToDoItem) {

  }
}
