import { useCheckoutFormStore } from './FormStore';

describe('useCheckoutFormStore', () => {
  beforeEach(() => {
    useCheckoutFormStore.setState({ paymentMethod: 'pix', installments: 0 });
  });

  it('updates installments', () => {
    expect(useCheckoutFormStore.getState().installments).toBe(0);
    useCheckoutFormStore.getState().setInstallments(3);
    expect(useCheckoutFormStore.getState().installments).toBe(3);
  });

  it('updates payment method', () => {
    expect(useCheckoutFormStore.getState().paymentMethod).toBe('pix');
    useCheckoutFormStore.getState().setPaymentMethod('credit_card');
    expect(useCheckoutFormStore.getState().paymentMethod).toBe('credit_card');
  });
});
