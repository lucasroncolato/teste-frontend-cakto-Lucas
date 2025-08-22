import React from 'react';
import { renderToString } from 'react-dom/server';
import { Label } from './Label';

describe('Label', () => {
  it('renders children', () => {
    const html = renderToString(<Label>Test</Label>);
    expect(html).toContain('Test');
  });
});
