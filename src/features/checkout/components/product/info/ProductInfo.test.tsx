import React from 'react';
import { renderToString } from 'react-dom/server';
import { ProductInfo } from './ProductInfo';

jest.mock('next/image', () => {
  return function NextImage(props: React.ComponentProps<'img'>) {
    return React.createElement('img', props);
  };
});
jest.mock('@/shared/components/Icons', () => ({ PixIcon: () => <svg /> }));
jest.mock('@/shared/components/ui/Badge', () => ({
  Badge: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
jest.mock('@/shared/components/ui/Headers', () => ({
  TypographyH3: function TypographyH3({ children }: { children: React.ReactNode }) {
    return <h3>{children}</h3>;
  },
  TypographyParagraph: function TypographyParagraph({ children }: { children: React.ReactNode }) {
    return <p>{children}</p>;
  },
}));

const product = {
  id: 1,
  name: 'Item',
  currentPrice: 100,
  originalPrice: 120,
  producer: 'Prod',
  format: 'digital' as const,
  deliveryTime: 'imediato' as const,
  imageUrl: 'https://example.com/image.jpg',
};

describe('ProductInfo', () => {
  it('renders product name', () => {
    const html = renderToString(<ProductInfo product={product} />);
    expect(html).toContain('Item');
  });
});
