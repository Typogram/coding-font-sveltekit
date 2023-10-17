<script lang="ts">
import { monacoThemeNames } from '$lib';
import { selectedTheme, fontSize, fontFamily } from '$lib/store';

const fontFamilies = [
  'Anonymous Pro',
  'Azeret Mono',
  'B612 Mono',
  'Courier Prime',
  'Cousine',
  'Cutive Mono',
  'DM Mono',
  'Fira Code',
  'Fira Mono',
  'IBM Plex Mono',
  'Inconsolata',
  'JetBrains Mono',
  'Major Mono Display',
  'Nanum Gothic Coding',
  'Noto Sans Mono',
  'Roboto Mono',
  'Source Code Pro',
  'Space Mono',
  'Ubuntu Mono'
];
</script>

<div
  class="bg-surface-100-800-token flex flex-row px-4 py-2 gap-4 border-b border-surface-400 dark:border-surface-500">
  <label class="flex flex-row items-baseline gap-2 whitespace-nowrap">
    <span>Editor Theme: </span>
    <select class="select" bind:value="{$selectedTheme}" size="1">
      {#each monacoThemeNames as theme (theme.slug)}
        <option value="{theme.slug}">{theme.displayName}</option>
      {/each}
    </select>
  </label>
  <label class="flex flex-row items-baseline gap-2 whitespace-nowrap">
    <span>Font Size: </span>
    <input class="input" bind:value="{$fontSize}" type="number" />
  </label>
  <label class="flex flex-row items-baseline gap-2 whitespace-nowrap">
    <span>Font Family: </span>
    <select class="select" bind:value="{$fontFamily}" size="1">
      {#each fontFamilies as font (font)}
        <option value="{font}">{font}</option>
      {/each}
    </select>
  </label>
</div>
