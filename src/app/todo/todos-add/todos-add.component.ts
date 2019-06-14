import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { AgregarTodo, Acciones } from '../todo.actions';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styles: []
})
export class TodosAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo() {
    if (this.txtInput.invalid) { return; }

    const accion: Acciones = new AgregarTodo(this.txtInput.value);
    this.store.dispatch(accion);
    this.txtInput.setValue('');
  }

}
