import { todoReducer } from '../../src/08-useReducer/todoReducer'; 

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    const advancedState = [
        {
            id: 1,
            description: 'Demo Todo',
            done: false
        },
        {
            id: 2,
            description: 'Demo Todo #2',
            done: false
        }
    ];
    
    test('Debe regregar el estado inicial', () => {

        const newState = todoReducer( initialState, {} );

        expect( newState ).toBe( initialState );

    });

    test('Debe agregar un TODO', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo Todo',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    });

    test('Debe eliminar un Todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 2
        };

        const newState = todoReducer( advancedState, action );

        expect( newState.length ).toBe( 1 );
        expect( newState ).not.toContain( action.payload );

    });

    test('Debe realizar el Toggle del Todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 2
        };

        const newState = todoReducer( advancedState, action );

        expect( newState[1].done ).toBeTruthy();

    });

});