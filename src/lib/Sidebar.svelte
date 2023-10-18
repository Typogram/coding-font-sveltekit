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
  class="absolute lg:static z-20 flex flex-col w-[calc(100vw-4rem)] sm:w-[30rem] lg:w-full h-full overflow-x-visible overflow-y-auto p-4 gap-4 bg-surface-100-800-token border-r border-surface-400 dark:border-surface-500"
  class:hide="{!$menuOpen}">
  <slot />
</div>
