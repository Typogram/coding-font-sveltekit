<script lang="ts">
import { page } from '$app/stores';
import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
import { IconMenu, Logo, ThemeSwitch } from '$lib';
import { menuOpen } from '$lib/store';
</script>

<div
  class="flex flex-row items-center justify-between p-4 gap-4 bg-surface-100-800-token border-b border-surface-400 dark:border-surface-700">
  <div class="flex flex-row gap-4">
    <button
      class="btn-icon variant-soft flex lg:hidden"
      on:click="{() => {
        $menuOpen = !$menuOpen;
      }}">
      <IconMenu size="24" />
    </button>
    <a href="/"><Logo class="w-auto h-[3rem]" /></a>
  </div>

  <TabGroup
    flex="flex"
    padding="px-2"
    border="border-none h3 relative"
    active="before:content-['<'] after:content-['>']">
    <TabAnchor href="/game" selected="{$page.url.pathname === '/game'}"
      >Game</TabAnchor>
    <TabAnchor href="/" selected="{$page.url.pathname === '/'}"
      >Browse</TabAnchor>
  </TabGroup>

  <ThemeSwitch />
</div>
