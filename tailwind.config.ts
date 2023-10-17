import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import { standardTheme } from './themes/standard';

const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],
  theme: {
    extend: {}
  },
  plugins: [
    forms,
    skeleton({
      themes: {
        custom: [standardTheme],
        preset: [
          { name: 'modern', enhancements: true },
          { name: 'seafoam', enhancements: true },
          { name: 'wintry', enhancements: true },
          { name: 'skeleton', enhancements: true },
          { name: 'crimson', enhancements: true },
          { name: 'rocket', enhancements: true },
          { name: 'vintage', enhancements: true },
          { name: 'sahara', enhancements: true },
          { name: 'hamlindigo', enhancements: true },
          { name: 'gold-nouveau', enhancements: true }
        ]
      }
    })
  ]
} satisfies Config;

export default config;
