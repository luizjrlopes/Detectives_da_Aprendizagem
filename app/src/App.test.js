import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <>{element}</>,
  Outlet: () => <div />,
  useLocation: () => ({ pathname: '/' }),
}), { virtual: true });

import App from './App';

test('renders header', () => {
  render(<App />);
  expect(screen.getByText(/detetives da aprendizagem/i)).toBeInTheDocument();
});
