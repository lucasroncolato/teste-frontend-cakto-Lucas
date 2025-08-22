import type { NextWebVitalsMetric } from 'next/app';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (typeof window !== 'undefined') {
    const body = JSON.stringify(metric);
    if ('sendBeacon' in navigator) {
      navigator.sendBeacon('/api/vitals', body);
    } else {
      fetch('/api/vitals', { method: 'POST', body, keepalive: true });
    }
  }
}
