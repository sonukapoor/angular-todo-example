import { IToDoItem } from './../to-do.type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input() todoItem: IToDoItem;

  constructor() { }

  ngOnInit() {
  }

  onCompleteChange(item: IToDoItem) {

  }

}
