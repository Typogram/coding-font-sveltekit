<script lang="ts">
import { monacoThemeNames } from '$lib';
import { RangeSlider } from '@skeletonlabs/skeleton';
import { showName, selectedTheme, fontSize, fontLigatures } from '$lib/store';

const sortedMonacoThemes = monacoThemeNames.sort((a, b) => {
  if (a.italic && !b.italic) {
    return -1;
  }

  if (!a.italic && b.italic) {
    return 1;
  }

  return 0;
});
</script>

<div
  class="bg-surface-100-800-token flex flex-row gap-4 overflow-x-auto whitespace-nowrap border-b border-surface-400 px-4 py-2 dark:border-surface-500">
  <label class="flex items-center space-x-2">
    <input class="checkbox" type="checkbox" bind:checked="{$showName}" />
    <span>Show Name</span>
  </label>
  <label class="flex flex-row items-baseline gap-2 whitespace-nowrap">
    <span>Theme: </span>
    <select class="select min-w-[6rem]" bind:value="{$selectedTheme}" size="1">
      {#each sortedMonacoThemes as theme (theme.slug)}
        <option value="{theme.slug}">{theme.displayName}</option>
      {/each}
    </select>
  </label>
  <label class="flex flex-row items-baseline gap-2 whitespace-nowrap">
    <span>Font Size: </span>
    <input class="min-w-12 input w-16" bind:value="{$fontSize}" type="number" />
    <RangeSlider
      class="w-40 lg:w-60"
      name="font-size-slider"
      bind:value="{$fontSize}"
      max="{36}"
      min="{8}"
      step="{1}"
      ticked />
  </label>
  <label class="flex items-center space-x-2">
    <input class="checkbox" type="checkbox" bind:checked="{$fontLigatures}" />
    <span>Font Ligatures</span>
  </label>
</div>
