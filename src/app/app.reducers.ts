import { Item } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoreducer } from './todo/todo.reducer';
import { filtroReducer } from './filter/filter.reducer';

export interface AppState {
    todos: Item[];
    filtro: string;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoreducer,
    filtro: filtroReducer
};