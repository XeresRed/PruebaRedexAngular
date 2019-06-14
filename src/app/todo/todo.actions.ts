
import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDITAR_TODO = '[TODO] EDITAR todo';

export class AgregarTodo implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string ) { }

}

export class ToggleTodo implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number ) { }

}

export class EditarTodo implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string ) { }

}

export type Acciones =  AgregarTodo |
                        ToggleTodo |
                        EditarTodo;
