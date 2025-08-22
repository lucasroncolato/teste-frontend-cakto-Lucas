import React from 'react';
import { renderToString } from 'react-dom/server';

jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: () => ({ push: jest.fn() }),
}));
jest.mock('../../../actions/checkout/Checkout', () => ({ createCheckout: jest.fn() }));
jest.mock('../../../stores/FormStore', () => ({
  useCheckoutFormStore: (
    selector: (state: { installments: number; paymentMethod: string }) => unknown,
  ) => selector({ installments: 1, paymentMethod: 'pix' }),
}));
jest.mock('../../payment/info/PaymentInfo', () => ({ PaymentInfo: () => <div /> }));
jest.mock('../../summary/order/OrderSummary', () => ({ OrderSummary: () => <div /> }));
jest.mock('@/shared/components/ui/Button', () => ({
  Button: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
}));
jest.mock('@/shared/components/ui/Input', () => ({
  Input: (props: React.InputHTMLAttributes<HTMLInputElement>) => <input {...props} />,
}));
jest.mock('@/shared/components/ui/Label', () => ({
  Label: (props: React.LabelHTMLAttributes<HTMLLabelElement>) => <label {...props} />,
}));

const { ProductForm } = require('./ProductForm');

const product = {
  id: 1,
  name: 'Test',
  originalPrice: 100,
  currentPrice: 100,
  producer: 'Prod',
  format: 'digital' as const,
  deliveryTime: 'imediato' as const,
  imageUrl: 'https://example.com/image.png',
};

describe('ProductForm', () => {
  it('renders form heading', () => {
    const html = renderToString(<ProductForm product={product} />);
    expect(html).toContain('Seus dados');
  });
});
