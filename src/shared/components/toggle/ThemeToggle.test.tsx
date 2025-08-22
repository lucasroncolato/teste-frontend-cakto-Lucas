import React from 'react';
import { renderToString } from 'react-dom/server';
import { ThemeToggle } from './ThemeToggle';

jest.mock('next-themes', () => ({ useTheme: () => ({ theme: 'light', setTheme: jest.fn() }) }));

describe('ThemeToggle', () => {
  it('renders toggle button', () => {
    const html = renderToString(<ThemeToggle />);
    expect(html).toContain('Alternar tema claro e escuro');
  });
});
