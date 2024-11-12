<script lang="ts">
import { page } from '$app/stores';
import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
import { IconMenu, Logo, ThemeSwitch } from '$lib';
import { menuOpen } from '$lib/store';
</script>

<div
  class="bg-surface-100-800-token flex flex-row items-center justify-between gap-4 border-b border-surface-400 p-4 dark:border-surface-700">
  <div class="flex items-center justify-center gap-4">
    <button
      class="variant-soft btn-icon lg:hidden"
      on:click="{() => {
        $menuOpen = !$menuOpen;
      }}">
      <IconMenu size="24" />
    </button>
    <a href="/"><Logo class="h-[3rem] w-auto" /></a>
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
    <TabAnchor href="https://typogram.co/">Typogram</TabAnchor>
  </TabGroup>

  <ThemeSwitch />
</div>
