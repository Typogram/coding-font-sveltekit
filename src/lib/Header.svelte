<script lang="ts">
import { page } from '$app/stores';
import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
import { IconMenu, Logo, ThemeSwitch } from '$lib';
import { menuOpen } from '$lib/store';
</script>

<div
  class="flex flex-row items-center justify-between p-4 gap-4 bg-surface-100-800-token border-b border-surface-400 dark:border-surface-700">
  <div class="flex gap-4 items-center justify-center">
    <button
      class="btn-icon variant-soft lg:hidden"
      on:click="{() => {
        $menuOpen = !$menuOpen;
      }}">
      <IconMenu size="24" />
    </button>
    <a href="/"><Logo class="w-auto h-[3rem]" /></a>
  </div>

  <TabGroup
    flex="hidden md:flex"
    padding="px-2"
    border="border-none h3 relative"
    hover=""
    active="before:content-['<'] after:content-['>']">
    <TabAnchor href="/" selected="{$page.url.pathname === '/'}">Game</TabAnchor>
    <TabAnchor href="/browse" selected="{$page.url.pathname === '/browse'}"
      >Browse</TabAnchor>
  </TabGroup>

  <ThemeSwitch />
</div>
