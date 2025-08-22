import React from 'react';
import { renderToString } from 'react-dom/server';
import { PaymentInfo } from './PaymentInfo';

jest.mock('framer-motion', () => ({
  motion: { div: ({ children }: { children: React.ReactNode }) => <div>{children}</div> },
}));
jest.mock('../../../stores/FormStore', () => ({
  useCheckoutFormStore: (
    selector: (
      state: {
        paymentMethod: string;
        setPaymentMethod: jest.Mock;
        setInstallments: jest.Mock;
        installments: number;
      }
    ) => unknown,
  ) =>
    selector({
      paymentMethod: 'pix',
      setPaymentMethod: jest.fn(),
      setInstallments: jest.fn(),
      installments: 0,
    }),
}));
jest.mock('../box/PaymentInfoBox', () => ({
  PaymentInfoBox: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
jest.mock('@/shared/components/Icons', () => ({ PixIcon: () => <svg /> }));
jest.mock('@/shared/components/ui/Select', () => ({
  Select: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SelectContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SelectGroup: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SelectItem: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SelectLabel: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SelectTrigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SelectValue: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
jest.mock('@/shared/components/ui/Label', () => ({
  Label: ({ children }: { children: React.ReactNode }) => <label>{children}</label>,
}));

describe('PaymentInfo', () => {
  it('renders payment heading', () => {
    const html = renderToString(
      <PaymentInfo deliveryTime="imediato" currentPrice={100} />
    );
    expect(html).toContain('Pagamento');
  });
});
