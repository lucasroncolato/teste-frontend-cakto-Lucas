import { createCheckout } from './Checkout';

describe('createCheckout', () => {
  it('waits for the mocked request and logs payload', async () => {
    jest.useFakeTimers();
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    const data = {
      fullName: 'John Doe',
      email: 'john@example.com',
      document: '12345678901',
      paymentMethod: 'pix' as const,
      termsAccepted: true as const,
      installments: 1,
    };

    const promise = createCheckout(data);
    jest.runAllTimers();
    await promise;

    expect(logSpy).toHaveBeenCalledWith(
      'post finalized with payload:',
      data
    );

    logSpy.mockRestore();
    jest.useRealTimers();
  });
});
