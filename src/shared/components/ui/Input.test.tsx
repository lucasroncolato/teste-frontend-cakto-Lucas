import React from 'react';
import { renderToString } from 'react-dom/server';
import { Input } from './Input';

describe('Input', () => {
  it('renders placeholder', () => {
    const html = renderToString(<Input placeholder="test" />);
    expect(html).toContain('test');
  });
});
