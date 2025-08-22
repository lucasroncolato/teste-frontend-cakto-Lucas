import { reportWebVitals } from './reportWebVitals';

describe('reportWebVitals', () => {
  const metric = { name: 'FCP', value: 123 } as any;
  const originalFetch = global.fetch;
  const originalNavigator = (global as any).navigator;
  const originalWindow = (global as any).window;

  afterEach(() => {
    global.fetch = originalFetch;
    (global as any).navigator = originalNavigator;
    (global as any).window = originalWindow;
    jest.restoreAllMocks();
  });

  it('does nothing when window is undefined', () => {
    const fetchSpy = jest.spyOn(global as any, 'fetch');
    reportWebVitals(metric);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('uses navigator.sendBeacon when available', () => {
    (global as any).window = {};
    const sendBeacon = jest.fn();
    (global as any).navigator = { sendBeacon };
    global.fetch = jest.fn();

    reportWebVitals(metric);
    expect(sendBeacon).toHaveBeenCalledWith('/api/vitals', JSON.stringify(metric));
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('falls back to fetch when sendBeacon is unavailable', () => {
    (global as any).window = {};
    (global as any).navigator = {};
    global.fetch = jest.fn();

    reportWebVitals(metric);
    expect(global.fetch).toHaveBeenCalledWith('/api/vitals', {
      method: 'POST',
      body: JSON.stringify(metric),
      keepalive: true,
    });
  });
});

