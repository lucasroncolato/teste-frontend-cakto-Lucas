import React from 'react';
import { renderToString } from 'react-dom/server';
import { TypographyH1 } from './Headers';

describe('TypographyH1', () => {
  it('renders heading text', () => {
    const html = renderToString(<TypographyH1>Title</TypographyH1>);
    expect(html).toContain('Title');
  });
});
