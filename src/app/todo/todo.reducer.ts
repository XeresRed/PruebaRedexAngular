import * as TodoAction from './todo.actions';
import { Item } from './model/todo.model';

const todo1 = new Item('Vencer a thanos');
const todo2 = new Item('Salvar al mundo');
const todo3 = new Item('Pedir prestado el traje de ironman');

todo2.completado = true;

const estadoInicial: Item[] = [todo1, todo2, todo3];

export function todoreducer(state = estadoInicial, action: TodoAction.Acciones) :Item[] {
    switch(action.type) {
        case TodoAction.AGREGAR_TODO:
            const todo = new Item(action.texto);
            // state.push(todo); --> MAL PORQUE MUTA EL ESTADO Y CREA UNA REFERENCIA
            // tslint:disable-next-line: max-line-length
            return [...state, todo]; // OPERADOR SPREED, CREA UN NUEVO ARREGLO CON COPIA DEL ESTADO ANTIGUO Y NO SE AFECTA POR PASO DE REFERENCIA
        case TodoAction.TOGGLE_TODO:
                return state.map( (todoEdit) => {
                    if (todoEdit.id === action.id) {
                        return {
                            ...todoEdit,
                            completado : !todoEdit.completado
                        // tslint:disable-next-line: max-line-length
                        }; // OPERADOR SPREED, CREA UN NUEVO ARREGLO CON COPIA DEL ESTADO ANTIGUO Y EN ESTE CASO SE CLONA ES LA INFORMACIÓN DE TODO
                    } else {
                        return todoEdit;
                    }
                });
        case TodoAction.EDITAR_TODO:
                return state.map( (todoEdit) => {
                    if (todoEdit.id === action.id) {
                        return {
                            ...todoEdit,
                            texto : action.texto
                        // tslint:disable-next-line: max-line-length
                        }; // OPERADOR SPREED, CREA UN NUEVO ARREGLO CON COPIA DEL ESTADO ANTIGUO Y EN ESTE CASO SE CLONA ES LA INFORMACIÓN DE TODO
                    } else {
                        return todoEdit;
                    }
                });
        default:
            return state;
    }
}