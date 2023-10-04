import { render, screen } from '@testing-library/react';
import Home from '../containers/Home.js';

test('render correctly', () => {
  render(<Home />);
  // const linkElement = screen.getByText(/Hola/i);
  // expect(linkElement).toBeInTheDocument();
});
