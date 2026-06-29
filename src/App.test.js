// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders fitness tracker home page', () => {
  render(<App />);
  const headingElement = screen.getByText(/track your fitness/i);
  expect(headingElement).toBeInTheDocument();
});