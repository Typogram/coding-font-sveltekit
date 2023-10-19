import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const selectedTheme: Writable<string> = localStorageStore(
  'selectedTheme',
  'cobalt'
);

export const fontSize: Writable<number> = localStorageStore('fontSize', 20);

export const fontFamily: Writable<string> = localStorageStore(
  'fontFamily',
  'Fira Code'
);

export const fontFamilyRight: Writable<string> = localStorageStore(
  'fontFamilyRight',
  'Fira Code'
);

export const fontLigatures: Writable<boolean> = localStorageStore(
  'fontLigatures',
  true
);

export const searchTerm: Writable<string> = localStorageStore('searchTerm', '');

export const menuOpen: Writable<boolean> = localStorageStore('menuOpen', false);

export const showName: Writable<boolean> = localStorageStore('showName', false);
