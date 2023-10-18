<script lang="ts">
import { AppBar } from '@skeletonlabs/skeleton';
import { IconMenu, Logo, ThemeSwitch } from '$lib';
import { menuOpen } from '$lib/store';
</script>

<AppBar border="border-b border-surface-400 dark:border-surface-500">
  <svelte:fragment slot="lead">
    <button
      class="btn-icon variant-soft flex lg:hidden"
      on:click="{() => {
        $menuOpen = !$menuOpen;
      }}">
      <IconMenu size="24" />
    </button>
  </svelte:fragment>
  <a href="/"><Logo class="w-auto h-[3rem]" /></a>
  <svelte:fragment slot="trail">
    <ThemeSwitch />
  </svelte:fragment>
</AppBar>
