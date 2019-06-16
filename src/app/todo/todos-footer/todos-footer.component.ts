import { Component, OnInit } from '@angular/core';
import * as filtroAction from '../../filter/filter.actions'
import * as TodoAction from '../todo.actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Item } from '../model/todo.model';
import { BorrarAllTodo } from '../todo.actions';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styles: []
})
export class TodosFooterComponent implements OnInit {

  pendientes: number;
  filtrosValids: filtroAction.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    })
  }

  CambiarFiltro( nuevofiltro: filtroAction.filtrosValidos) {
    const accion = new filtroAction.SetFiltroAction(nuevofiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Item[]){
    this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  LimpiarElementos() {
    const accion = new TodoAction.BorrarAllTodo();
    this.store.dispatch(accion);
  }

}
