import React from 'react';
import { renderToString } from 'react-dom/server';
import { PixIcon } from './Icons';

describe('PixIcon', () => {
  it('renders an svg element', () => {
    const html = renderToString(<PixIcon />);
    expect(html).toContain('<svg');
  });
});
