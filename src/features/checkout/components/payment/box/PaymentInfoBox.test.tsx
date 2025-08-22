import React from 'react';
import { renderToString } from 'react-dom/server';
import { PaymentInfoBox } from './PaymentInfoBox';

describe('PaymentInfoBox', () => {
  it('renders children', () => {
    const html = renderToString(
      <PaymentInfoBox selected={false} onClick={() => {}}>
        Child
      </PaymentInfoBox>
    );
    expect(html).toContain('Child');
  });
});
