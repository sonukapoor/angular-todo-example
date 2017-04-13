import { Component, OnInit } from '@angular/core';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { Observable } from 'rxjs/Observable';

import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'To Do';

  constructor(
    private toDoService: ToDoService
  ) {
  }

  ngOnInit() {
    this.toDoService.initialize();
  }

  onNewItem(item: string) {
    this.toDoService.addItem(item);
  }
}
