import * as filtroActions from './filter.actions';
import { Action } from '@ngrx/store';

const estadoInicial: filtroActions.filtrosValidos = 'todos';

export function filtroReducer(state = estadoInicial, accion : filtroActions.acciones) : filtroActions.filtrosValidos {

    switch (accion.type) {
        case filtroActions.SET_FILTRO:
            return accion.filtro;
        default:
            return state;
    }
    
}