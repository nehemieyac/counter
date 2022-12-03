import {render, fireEvent, screen} from '@testing-library/react'
import Counter from '../components/Counter'

beforeEach(() => {
    render(<Counter />);
})

test('renders counter message', () => {
    expect(screen.getByText(/Counter/i).toBeInTheDocument);
});

test('should render initial count with value of 0', () => {
    const blue = screen.getByText(/0/i);
    expect(blue.toBeInTheDocument);
});

test('clicking + increments the count', () => {
    const increase = screen.getByRole('button', { name: '+' });
    fireEvent.click(increase);
    expect(screen.getByText(/1/i).toBeInTheDocument);

});

test('clicking - decrements the count', () => {
    const decrease = screen.getByRole('button', { name: '-' });
    fireEvent.click(decrease);
    expect(screen.getByText(/-1/i).toBeInTheDocument);
});
