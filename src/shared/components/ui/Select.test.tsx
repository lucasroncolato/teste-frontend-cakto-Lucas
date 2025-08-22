import React from 'react';
import { renderToString } from 'react-dom/server';
import { Select, SelectTrigger, SelectValue } from './Select';

describe('Select', () => {
  it('renders trigger', () => {
    const html = renderToString(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="value" />
        </SelectTrigger>
      </Select>
    );
    expect(html).toContain('select-trigger');
  });
});
