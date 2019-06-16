
import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_TODO_ALL = '[TODO] Toggle all todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const BORRAR_ALL_TODO = '[TODO] Borrar all todo';

export class AgregarTodo implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string ) { }

}

export class ToggleTodo implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number ) { }
}

export class ToggleTodoAll implements Action {
    readonly type = TOGGLE_TODO_ALL;

    constructor(public completado: boolean) { }

}

export class EditarTodo implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string ) { }
}

export class BorrarTodo implements Action {
    readonly type = BORRAR_TODO;

    constructor(public id: number) { }
}


export class BorrarAllTodo implements Action {
    readonly type = BORRAR_ALL_TODO;

    constructor() { }
}

export type Acciones =  AgregarTodo |
                        ToggleTodo |
                        ToggleTodoAll |
                        EditarTodo |
                        BorrarTodo | 
                        BorrarAllTodo;
