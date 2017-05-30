import { IToDoItem } from './to-do.type';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

  private stateSubject$: BehaviorSubject<IToDoItem[]> = new BehaviorSubject([]);
  public readonly state$: Observable<IToDoItem[]> = this.stateSubject$.asObservable();

  constructor() { }

  addItem(todoItem: IToDoItem) {
    this.stateSubject$.next([...this.stateSubject$.getValue(), todoItem]);
  }
}
