import { createFormAdd } from './form.add';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; //nameSpace for jest-dom matchers
import { vi } from 'vitest';

vi.spyOn(console, 'log');

describe('createFormAdd', () => {
    test('Cuando se llama a createFormAdd, Entonces debería renderizar el formulario', async () => {
        const form = createFormAdd([]);

        expect(form).toBeInstanceOf(HTMLFormElement);

        const formElement = screen.getByRole('form', {
            name: 'add_form',
        }) as HTMLFormElement;

        expect(formElement).toBeInTheDocument();

        await userEvent.type(screen.getByLabelText('Name'), 'nombre');
        await userEvent.type(
            screen.getByLabelText('Description'),
            'descripcion',
        );
        await userEvent.type(screen.getByLabelText('Price'), '10');

        const button = screen.getByRole('button', { name: 'Crear' });

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('type', 'submit');

        button.click();

        const product = {
            id: -Infinity,
            name: 'nombre',
            description: 'descripcion',
            category: '',
            price: 10,
            hasPromo: false,
        };

        expect(console.log).toHaveBeenCalledWith('Form submitted:', product);
    });
});
