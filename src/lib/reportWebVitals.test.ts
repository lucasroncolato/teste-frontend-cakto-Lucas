import { reportWebVitals } from "./reportWebVitals";

type Metric = {
  id: string;
  startTime: number;
  value: number;
  attribution?: { [key: string]: unknown };
  label: "custom";
  name: "Next.js-hydration" | "Next.js-route-change-to-render" | "Next.js-render";
};

describe("reportWebVitals", () => {
  const metric: Metric = {
    id: "test-id",
    startTime: 0,
    value: 123,
    label: "custom",
    name: "Next.js-hydration"
  };

  const originalFetch: typeof fetch | undefined = globalThis.fetch;
  const originalNavigator: Navigator | undefined = (globalThis as {
    navigator?: Navigator;
  }).navigator;
  const originalWindow: Window | undefined = (globalThis as {
    window?: Window;
  }).window;

  afterEach(() => {
    // restaura fetch
    if (originalFetch) {
      (globalThis as { fetch: typeof fetch }).fetch = originalFetch;
    } else {
      // remove se não existia
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete (globalThis as { fetch?: typeof fetch }).fetch;
    }

    // restaura navigator
    if (originalNavigator) {
      (globalThis as { navigator: Navigator }).navigator = originalNavigator;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete (globalThis as { navigator?: Navigator }).navigator;
    }

    // restaura window
    if (originalWindow) {
      (globalThis as { window: Window }).window = originalWindow;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete (globalThis as { window?: Window }).window;
    }

    jest.restoreAllMocks();
  });

  it("does nothing when window is undefined", () => {
    // garante que não existe window
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete (globalThis as { window?: Window }).window;

    const fetchMock = jest.fn() as jest.MockedFunction<typeof fetch>;
    (globalThis as { fetch: typeof fetch }).fetch = fetchMock;

    reportWebVitals(metric);

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("uses navigator.sendBeacon when available", () => {
    // simula ambiente de navegador
    (globalThis as { window: Window }).window = {} as Window;

    const sendBeacon = jest.fn().mockReturnValue(true);
    (globalThis as { navigator: Navigator }).navigator = {
      sendBeacon,
    } as unknown as Navigator;

    const fetchMock = jest.fn() as jest.MockedFunction<typeof fetch>;
    (globalThis as { fetch: typeof fetch }).fetch = fetchMock;

    reportWebVitals(metric);

    expect(sendBeacon).toHaveBeenCalledWith(
      "/api/vitals",
      JSON.stringify(metric)
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("falls back to fetch when sendBeacon is unavailable", () => {
    (globalThis as { window: Window }).window = {} as Window;
    (globalThis as { navigator: Navigator }).navigator = {} as Navigator;

    const fetchMock = jest.fn() as jest.MockedFunction<typeof fetch>;
    (globalThis as { fetch: typeof fetch }).fetch = fetchMock;

    reportWebVitals(metric);

    expect(fetchMock).toHaveBeenCalledWith("/api/vitals", {
      method: "POST",
      body: JSON.stringify(metric),
      keepalive: true,
    });
  });
});
