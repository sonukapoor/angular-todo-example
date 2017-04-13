import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ToDoService {

  baseUrl: string = 'http://localhost:3000';
  changes: BehaviorSubject<string[]> = new BehaviorSubject([]);
  items: string[] = [];

  constructor(
    private http: Http
  ) {
  }

  initialize() {
    const url = `${this.baseUrl}/items`;
    this.http
      .get(url)
      .map(res => res.json())
      .subscribe(
        (body) => {
          this.items = this.jsonToList(body.todo);
          this.changes.next(this.items);
        },
        (err) => { console.log(err); }
      );
  }

  getChanges() {
    return this.changes;
  }

  addItem(item: string) {
    this.items.push(item);
    this.changes.next(this.items);

    const url = `${this.baseUrl}/items`;
    this.http
      .post(url, {todo: this.listToJson(this.items)})
      .map(res => res.json())
      .subscribe(
        (err) => { console.log(err); }
      );
  }

  jsonToList(data) {
    return data.map((x) => { return x.text; });
  }

  listToJson(data) {
    return data.map((x, i) => { return {id: i, text: x}; });
  }
}
