<script lang="ts">
import { AppShell } from '@skeletonlabs/skeleton';
import {
  Header,
  SearchBar,
  FontTable,
  Sidebar,
  FontHeader,
  Controls,
  MonacoEditor
} from '$lib';
import {
  selectedTheme,
  fontSize,
  fontFamily,
  fontFamilyRight,
  fontLigatures,
  searchTerm
} from '$lib/store';

export let data;
let { fonts } = data;

function getFontByFamilyName(familyName: string) {
  return fonts.find((font) => font.family === familyName);
}

$: if ($searchTerm) {
  fonts = data.fonts.filter((font) =>
    font.family.toLowerCase().includes($searchTerm.toLowerCase())
  );
} else {
  fonts = data.fonts;
}
</script>

<AppShell
  slotSidebarLeft="flex relative resize-x min-w-0 w-0 lg:w-[30rem] lg:min-w-[16rem] !overflow-visible">
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar>
      <SearchBar />
      <FontTable fonts="{fonts}" />
    </Sidebar>
  </svelte:fragment>
  <svelte:fragment slot="pageHeader">
    <Controls />
  </svelte:fragment>
  <div
    class="grid grid-cols-1 md:grid-cols-2 h-full bg-surface-50-900-token p-4 gap-4">
    <div class="flex flex-col gap-4" class:col-span-2="{!$fontFamilyRight}">
      <FontHeader font="{getFontByFamilyName($fontFamily)}" />
      <MonacoEditor
        class="rounded-container-token overflow-hidden"
        fontSize="{$fontSize}"
        fontFamily="{$fontFamily}"
        fontLigatures="{$fontLigatures}"
        themeName="{$selectedTheme}" />
    </div>
    {#if $fontFamilyRight}
      <div class="hidden md:flex flex-col gap-4 relative">
        <FontHeader font="{getFontByFamilyName($fontFamilyRight)}" />
        <MonacoEditor
          class="rounded-container-token overflow-hidden"
          fontSize="{$fontSize}"
          fontFamily="{$fontFamilyRight}"
          fontLigatures="{$fontLigatures}"
          themeName="{$selectedTheme}" />
        <button
          class="btn variant-filled-surface absolute bottom-4 self-center"
          on:click="{() => {
            $fontFamilyRight = '';
          }}">Clear Comparison</button>
      </div>
    {/if}
  </div>
</AppShell>
