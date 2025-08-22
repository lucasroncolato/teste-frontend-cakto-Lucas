import React from 'react';
import { renderToString } from 'react-dom/server';
import { OrderSummary } from './OrderSummary';

jest.mock('framer-motion', () => ({
  motion: { div: ({ children }: { children: React.ReactNode }) => <div>{children}</div> },
}));
jest.mock('../../../stores/FormStore', () => ({
  useCheckoutFormStore: (
    selector: (state: { paymentMethod: string; installments: number }) => unknown,
  ) => selector({ paymentMethod: 'pix', installments: 0 }),
}));

describe('OrderSummary', () => {
  it('renders summary heading', () => {
    const html = renderToString(
      <OrderSummary productBaseValue={100} producerName="Prod" />
    );
    expect(html).toContain('Resumo do Pedido');
  });
});
