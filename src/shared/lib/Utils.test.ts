import { cn } from './Utils';

describe('cn', () => {
  it('merges class names using tailwind-merge', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });

  it('handles conditional values', () => {
    const result = cn('text-sm', false && 'hidden', ['font-bold']);
    expect(result).toBe('text-sm font-bold');
  });
});
