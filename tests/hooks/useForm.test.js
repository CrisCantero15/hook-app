import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@google.com'
    }

    test('Debe regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });

    });

    test('Debe cambiar el nombre del formulario', () => {

        const event = {
            target: {
                name: 'name',
                value: 'Juan'
            }
        };

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange( event );
        });

        console.log( result.current );

        expect( result.current.name ).toBe( 'Juan' );
        expect( result.current.formState.name ).toBe( 'Juan' );

    });

    test('Debe realizar el reset del formulario', () => {

        const event = {
            target: {
                name: 'name',
                value: 'Juan'
            }
        };

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange( event );
            onResetForm();
        });

        console.log( result.current );

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

    });

});