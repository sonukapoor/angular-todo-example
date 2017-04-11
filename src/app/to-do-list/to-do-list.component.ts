import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, ITEM_DELETE } from '../store';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  thingsToDo: string[];

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store
      .select('items')
      .subscribe((items: string[]) => {this.thingsToDo = items.slice();});
  }

  onDelete(item) {
    this.store.dispatch({type: ITEM_DELETE, payload: item});
  }
}
