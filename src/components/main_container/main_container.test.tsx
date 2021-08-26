import React from 'react';
import { render, screen } from '@testing-library/react';
import Main_Container from './main_container';

test('renders learn react link', () => {
  render(<Main_Container />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
