import React from 'react';
import { renderToString } from 'react-dom/server';
import { Header } from './Header';

jest.mock('next/image', () => {
  return function NextImage(props: React.ComponentProps<'img'>) {
    return React.createElement('img', props);
  };
});
jest.mock('../toggle/ThemeToggle', () => ({ ThemeToggle: () => <button /> }));

describe('Header', () => {
  it('renders logo alt text', () => {
    const html = renderToString(<Header />);
    expect(html).toContain('Cakto logo');
  });
});
