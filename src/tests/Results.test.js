import { render, screen } from '@testing-library/react';
import Results from '../containers/Results.js';

test('render correctly', () => {
  render(<Results />);
  // const linkElement = screen.getByText(/Hola/i);
  // expect(linkElement).toBeInTheDocument();
});
