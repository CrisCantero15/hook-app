const { render, screen, fireEvent } = require("@testing-library/react");
import { TodoItem } from '../../src/08-useReducer/components';

describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks );

    test('Debe mostrar el Todo Pendiente de completar', () => {

        render( <TodoItem 
                    todo={ todo }
                    onDeleteTodo={ onDeleteTodoMock }
                    onToggleTodo={ onToggleTodoMock } 
                /> );

        // screen.debug();

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');

    });

    test('Debe mostrar el Todo completado', () => {

        todo.done = true;

        render( <TodoItem 
                    todo={ todo }
                    onDeleteTodo={ onDeleteTodoMock }
                    onToggleTodo={ onToggleTodoMock } 
                /> );

        // screen.debug();

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('Span debe llamar el ToggleTodo cuando se hace click', () => {

        render( <TodoItem 
                    todo={ todo }
                    onDeleteTodo={ onDeleteTodoMock }
                    onToggleTodo={ onToggleTodoMock } 
                /> );
        
        const spanElement = screen.getByLabelText('span');

        fireEvent.click( spanElement );
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });

    test('Button debe llamar el DeleteTodo cuando se hace click', () => {

        render( <TodoItem 
                    todo={ todo }
                    onDeleteTodo={ onDeleteTodoMock }
                    onToggleTodo={ onToggleTodoMock } 
                /> );
        
        // const buttonElement = screen.getByRole('button', { name: 'Borrar' });
        const buttonElement = screen.getByLabelText('Borrar');

        fireEvent.click( buttonElement );
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    });

});