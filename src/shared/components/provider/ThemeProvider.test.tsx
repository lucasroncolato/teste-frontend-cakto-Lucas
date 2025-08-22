import React from 'react';
import { renderToString } from 'react-dom/server';
import { ThemeProvider } from './ThemeProvider';

jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('ThemeProvider', () => {
  it('renders children', () => {
    const html = renderToString(
      <ThemeProvider attribute="class">
        <span>child</span>
      </ThemeProvider>
    );
    expect(html).toContain('child');
  });
});
