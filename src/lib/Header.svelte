<script lang="ts">
import { AppBar } from '@skeletonlabs/skeleton';
import { Logo, Icon, ThemeSwitch } from '$lib';
</script>

<AppBar border="border-b border-surface-400 dark:border-surface-500">
  <svelte:fragment slot="lead">
    <button class="btn-icon variant-soft">
      <Icon name="Menu" />
    </button>
  </svelte:fragment>
  <Logo class="w-auto h-[3rem]" />
  <svelte:fragment slot="trail">
    <ThemeSwitch />
  </svelte:fragment>
</AppBar>
