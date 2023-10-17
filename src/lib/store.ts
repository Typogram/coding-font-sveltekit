import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const selectedTheme: Writable<string> = localStorageStore(
  'selectedTheme',
  'monokai'
);

export const fontSize: Writable<number> = localStorageStore('fontSize', 20);

export const fontFamily: Writable<string> = localStorageStore(
  'fontFamily',
  'Major Mono Display'
);
