<script lang="ts">
import { IconMenu, Logo, ThemeSwitch } from '$lib';
import { menuOpen } from '$lib/store';
</script>

<div
  class="flex flex-row items-center p-4 gap-4 bg-surface-100-800-token border-b border-surface-400 dark:border-surface-500">
  <button
    class="btn-icon variant-soft flex lg:hidden"
    on:click="{() => {
      $menuOpen = !$menuOpen;
    }}">
    <IconMenu size="24" />
  </button>
  <a href="/"><Logo class="w-auto h-[3rem]" /></a>
  <div class="flex-grow"></div>
  <ThemeSwitch />
</div>
