<script lang="ts">
import { onMount } from 'svelte';
import { searchTerm } from '$lib/store';

let placeholderText: string;
let searchInput: HTMLInputElement;

onMount(() => {
  if (navigator.platform.toUpperCase().includes('WIN')) {
    placeholderText = 'Ctrl K to Search …';
  } else if (navigator.platform.toUpperCase().includes('MAC')) {
    placeholderText = '⌘ K to Search …';
  } else {
    placeholderText = 'Search …';
  }
  const handleKeydown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      searchInput.focus();
      event.preventDefault();
    }
  };

  window.addEventListener('keydown', handleKeydown);

  return () => {
    window.removeEventListener('keydown', handleKeydown);
  };
});
</script>

<input
  bind:this="{searchInput}"
  class="input py-2 px-4 max-w-[40rem]"
  type="search"
  bind:value="{$searchTerm}"
  placeholder="{placeholderText}" />
