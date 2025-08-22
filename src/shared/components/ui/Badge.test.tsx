import React from 'react';
import { renderToString } from 'react-dom/server';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders content', () => {
    const html = renderToString(<Badge>New</Badge>);
    expect(html).toContain('New');
  });
});
