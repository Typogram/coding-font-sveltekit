<script lang="ts">
import { menuOpen } from '$lib/store';

let sidebar;

export function scrollToTop() {
  sidebar.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<div
  bind:this="{sidebar}"
  class="bg-surface-100-800-token absolute z-20 flex h-full w-[calc(100vw-4rem)] flex-col gap-4 overflow-y-auto overflow-x-visible border-r border-surface-400 p-4 dark:border-surface-500 sm:w-[30rem] lg:static lg:w-full"
  class:hide="{!$menuOpen}">
  <slot />
</div>
