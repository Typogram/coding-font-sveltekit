import { codingFonts } from '$lib';

export async function load({ params }) {
  const slug = params.slug;
  const decodedSlug = decodeURIComponent(slug); // Then, try to decode it

  const font = codingFonts.find((font) => font.family === decodedSlug);
  if (font) {
    return { font };
  }
}
