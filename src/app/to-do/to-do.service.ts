import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToDoService {

  baseUrl = 'http://localhost:3000';
  items = [];
  changes: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private http: Http) { }


  initialize() {
    const url = `${this.baseUrl}/items`;
    this.http
      .get(url)
      .map(res => res.json())
      .subscribe((body) => {
        this.items = body.map(item => item.text);
        this.changes.next(this.items);
      },
      (err) => { console.log(err); }
      );
  }

  getChanges$() {
    const url = `${this.baseUrl}/items`;
    return this.http.get(url)
      .map(response => response.json())
      .catch(e => {
        return Observable.throw(
          new Error(`An error has occured: ${e.status} ${e.statusText}`)
        );
      });
  }

  addItem(item: string) {
    const url = `${this.baseUrl}/items`;
    this.http
      .post(url, { 'text': item })
      .map(res => res.json())
      .subscribe(
        (res) => {
          if (res) {
            this.items.push(res);
            this.changes.next(this.items);
          }
        },
        (err) => { console.log(err); }
        );
  }
}
