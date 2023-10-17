<script lang="ts">
import { AppBar } from '@skeletonlabs/skeleton';
import { Logo, ThemeSwitch } from '$lib';
import Menu2 from 'svelte-tabler/Menu2.svelte';
</script>

<AppBar border="border-b border-surface-400 dark:border-surface-500">
  <svelte:fragment slot="lead">
    <button class="btn-icon variant-soft">
      <Menu2 size="24" />
    </button>
  </svelte:fragment>
  <Logo class="w-auto h-[3rem]" />
  <svelte:fragment slot="trail">
    <ThemeSwitch />
  </svelte:fragment>
</AppBar>
