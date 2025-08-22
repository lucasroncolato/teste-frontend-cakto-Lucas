import React from 'react';
import { renderToString } from 'react-dom/server';

jest.mock('canvas-confetti', () => jest.fn());
jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }));
jest.mock('@/shared/components/ui/Button', () => ({
  Button: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
    <button {...props}>{children}</button>
  ),
}));

import { ActionButtons } from './ActionButtons';

describe('ActionButtons', () => {
  it('renders back button text', () => {
    const html = renderToString(<ActionButtons />);
    expect(html).toContain('Voltar para o produto');
  });
});
