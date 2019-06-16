import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodo, EditarTodo, BorrarTodo } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Item;
  @ViewChild('txtInputFisico', { read: false, static: false }) txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl( this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe( () => {
      const accion = new ToggleTodo(this.todo.id);
      this.store.dispatch(accion);
    })
  }

  editar() {
    this.editando = !this.editando;
    setTimeout( () => {
      console.log(this.txtInputFisico);
      this.txtInputFisico.nativeElement.select();
    }, 2);
  }

  TerminarEdicion() {
    this.editando = !this.editando;
    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.texto) { return; }
    
    const accion = new EditarTodo( this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);
  }

  Borrar() {
    const accion = new BorrarTodo(this.todo.id)
    this.store.dispatch(accion);
  }

}
