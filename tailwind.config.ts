import type { Config } from 'tailwindcss';
import animate from 'tw-animate-css';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [animate],
} satisfies Config;
