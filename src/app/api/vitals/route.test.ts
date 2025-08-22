import { POST } from './route';

describe('POST /api/vitals', () => {
  it('logs the metrics and returns 200', async () => {
    const body = { metric: 'CLS' };
    const req = {
      json: async () => body,
      cookies: {},
      nextUrl: {},
      page: {},
      ua: '',
      [Symbol.for('INTERNALS')]: {}
    } as unknown as import('next/server').NextRequest;
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

    const res = await POST(req);

    expect(logSpy).toHaveBeenCalledWith('[Web Vitals]', body);
    expect(res.status).toBe(200);

    logSpy.mockRestore();
  });
});

