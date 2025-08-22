import React from 'react';
import { renderToString } from 'react-dom/server';
import { Button } from './Button';

describe('Button', () => {
  it('renders text', () => {
    const html = renderToString(<Button>Click</Button>);
    expect(html).toContain('Click');
  });
});
