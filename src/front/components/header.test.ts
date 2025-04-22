import { createHeader } from './header';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Probar componente Header', () => {
    test('Cuando se llama a createHeader, Entonces debería renderizar el header', () => {
        const header = createHeader();

        expect(header).toBeInstanceOf(HTMLElement);

        const element = screen.getByRole('heading', { name: 'Productos' });

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Productos');
        expect(element).toHaveClass('header__title');
    });
});
