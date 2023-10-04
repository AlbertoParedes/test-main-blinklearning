import { render, screen } from '@testing-library/react';
import Test from '../containers/Test.js';

test('render correctly', () => {
  render(<Test />);
  // const linkElement = screen.getByText(/Hola/i);
  // expect(linkElement).toBeInTheDocument();
});
