import { render, screen } from '@testing-library/react';
import Results from '../containers/Results.jsx';

test('render correctly', () => {
  render(<Results />);
  // const linkElement = screen.getByText(/Hola/i);
  // expect(linkElement).toBeInTheDocument();
});
