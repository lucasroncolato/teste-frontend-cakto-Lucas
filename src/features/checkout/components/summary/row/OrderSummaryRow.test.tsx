import React from 'react';
import { renderToString } from 'react-dom/server';
import { OrderSummaryRow } from './OrderSummaryRow';

describe('OrderSummaryRow', () => {
  it('renders label and value', () => {
    const html = renderToString(
      <OrderSummaryRow label={{ value: 'Label' }} value={{ value: '100' }} />
    );
    expect(html).toContain('Label');
    expect(html).toContain('100');
  });
});
