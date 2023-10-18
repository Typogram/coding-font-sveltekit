export const prerender = true;
import { codingFonts } from '$lib';

export async function load() {
  return {
    fonts: codingFonts
  };
}
