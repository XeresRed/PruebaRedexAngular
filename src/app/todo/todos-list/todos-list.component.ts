import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Item } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Item[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('todos').subscribe( todos => {
      this.todos = todos;
      
    })
  }

}
