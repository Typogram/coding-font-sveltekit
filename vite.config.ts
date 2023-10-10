import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true,
    port: 9000
  },
  plugins: [sveltekit()]
});
