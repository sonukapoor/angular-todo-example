import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IToDoItem } from './../to-do.type';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input() todoItem: IToDoItem;
  @Output() onToggleToDoItem: EventEmitter<number> = new EventEmitter();
  @Output() onDeleteToDoItem: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleToDoItem(itemId: number) {
    this.onToggleToDoItem.emit(itemId);
  }

  deleteToDoItem(itemId: number) {
    this.onDeleteToDoItem.emit(itemId);
  }
}
