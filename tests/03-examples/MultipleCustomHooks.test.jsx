import { render, screen, waitFor } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks';

// jest.mock( '../../src/hooks' );

describe('Pruebas en <MultipleCustomHooks />', () => {

    test('Debe mostrar el componente por defecto', () => {

        // useFetch.mockReturnValue({
        //     data: null,
        //     isLoading: true,
        //     hasError: null
        // });

        render( <MultipleCustomHooks /> );
        screen.debug();
        
        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect( screen.getByText('Información de Pokémon') ).toBeTruthy();
        expect( screen.getByRole('button', { name: 'Anterior' }) ).toBeTruthy();

    });

    // test('Debe mostrar un Quote', async () => {

    //     useFetch.mockReturnValue({
    //         data: [{ name: 'Bulbasaur', id: '1' }],
    //         isLoading: true,
    //         hasError: null
    //     });

    //     render( <MultipleCustomHooks /> );

    // });

});