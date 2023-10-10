<script lang="ts">
import { onMount } from 'svelte';
import type { Writable } from 'svelte/store';
import { Icon } from '$lib';
import {
  LightSwitch,
  popup,
  storePopup,
  localStorageStore
} from '@skeletonlabs/skeleton';
import type { PopupSettings } from '@skeletonlabs/skeleton';
import {
  computePosition,
  autoUpdate,
  offset,
  shift,
  flip,
  arrow
} from '@floating-ui/dom';

storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
const themeSelection: Writable<string> = localStorageStore(
  'themeSelection',
  'skeleton'
);

const popupFeatured: PopupSettings = {
  event: 'click',
  target: 'popupFeatured',
  placement: 'bottom',
  closeQuery: '#closeButton'
};

onMount(() => {
  document.body.setAttribute('data-theme', $themeSelection);
});

const themes = [
  { id: 'modern', displayName: 'Modern' },
  { id: 'seafoam', displayName: 'Seafoam' },
  { id: 'wintry', displayName: 'Wintry' },
  { id: 'skeleton', displayName: 'Skeleton' },
  { id: 'crimson', displayName: 'Crimson' },
  { id: 'rocket', displayName: 'Rocket' },
  { id: 'vintage', displayName: 'Vintage' },
  { id: 'sahara', displayName: 'Sahara' },
  { id: 'hamlindigo', displayName: 'Hamlindigo' },
  { id: 'gold-nouveau', displayName: 'Gold Nouveau' }
];

function handleChangeTheme(selectedTheme) {
  $themeSelection = selectedTheme;
  document.body.setAttribute('data-theme', selectedTheme);
}
</script>

<button class="btn-icon variant-soft" use:popup="{popupFeatured}">
  <Icon name="Color" />
</button>
<div
  class="card variant-glass-tertiary p-4 w-60 shadow-xl"
  data-popup="popupFeatured">
  <LightSwitch />
  <div class="flex flex-col mt-4 gap-2">
    {#each themes as themeItem}
      <button
        class="btn hover:variant-soft-secondary"
        class:!variant-filled="{themeItem.id === $themeSelection}"
        on:click="{() => handleChangeTheme(themeItem.id)}">
        {themeItem.displayName}
      </button>
    {/each}
  </div>
</div>
