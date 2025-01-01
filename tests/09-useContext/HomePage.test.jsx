import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <HomePage />', () => {

    test('Debe mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('Debe mostrar el componente CON el usuario', () => {

        const user = {
            id: 1,
            name: 'Fernando'
        };

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const h1Element = screen.getByRole('heading', { level: 1 });
        expect( h1Element.innerHTML ).toContain( user.name );

    });

});