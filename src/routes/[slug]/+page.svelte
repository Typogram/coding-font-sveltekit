<script lang="ts">
import { goto } from '$app/navigation';
import { AppShell } from '@skeletonlabs/skeleton';
import {
  IconExternalLink,
  IconDownload,
  IconBoxAlignRightFilled,
  Header,
  SearchBar,
  Sidebar,
  FontHeader,
  Controls,
  MonacoEditor
} from '$lib';
import {
  selectedTheme,
  fontSize,
  fontFamilyRight,
  fontLigatures,
  menuOpen,
  searchTerm
} from '$lib/store';

export let data;
let fonts = data.fonts;
let sidebarComponent: HTMLDivElement;

$: currentFont = data.font;

$: if (currentFont && sidebarComponent) {
  $menuOpen = true;
  sidebarComponent.scrollToTop();
}

$: if ($searchTerm) {
  fonts = data.fonts.filter((font) =>
    font.family.toLowerCase().includes($searchTerm.toLowerCase())
  );
} else {
  fonts = data.fonts;
}

function getFontByFamilyName(familyName: string) {
  return data.fonts.find((font) => font.family === familyName);
}
</script>

<AppShell
  slotSidebarLeft="flex relative resize-x min-w-0 w-0 lg:w-[30rem] lg:min-w-[16rem] !overflow-visible"
  slotHeader="z-30">
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar bind:this="{sidebarComponent}">
      <div class="flex flex-col gap-4">
        <ol class="breadcrumb">
          <li class="crumb">
            <a class="anchor" href="/browse">Browse</a>
          </li>
          <li class="crumb-separator" aria-hidden>&rsaquo;</li>
          <li>{currentFont?.family}</li>
        </ol>
        <h2 class="h2">{currentFont.family}</h2>
        <p>{`${currentFont?.variants.length} styles`}</p>
        <div class="flex flex-wrap gap-2">
          {#each currentFont.variants as variant (variant)}
            <a href="{currentFont.files[variant]}" target="_blank" class="code"
              >{variant}</a>
          {/each}
        </div>
        <div
          style="font-family: '{currentFont.family}'"
          class="card relative flex flex-col items-center justify-center min-h-[10rem] whitespace-nowrap overflow-hidden bg-white dark:bg-surface-900 border-surface-400-500-token border-token">
          <div class="code absolute bottom-0 right-0">regular</div>
          <span>{`0oO | Ll1Iti ,.:; () [] {} <> * ??. !!`}</span>
          <span>{`"" '' != == === if 0123456789 %@ && ||`}</span>
          <span>{`// /* */ << >> <= >= => -> . ++ -- ^+-`}</span>
          <span>{`Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm`}</span>
          <span>{`Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz`}</span>
        </div>
        {#if currentFont?.variants.includes('italic')}
          <div
            style="font-family: '{currentFont.family}'; font-style: italic;"
            class="card relative flex flex-col items-center justify-center min-h-[10rem] whitespace-nowrap overflow-hidden bg-white dark:bg-surface-900 border-surface-400-500-token border-token">
            <div class="code absolute bottom-0 right-0">italic</div>
            <span>{`0oO | Ll1Iti ,.:; () [] {} <> * ??. !!`}</span>
            <span>{`"" '' != == === if 0123456789 %@ && ||`}</span>
            <span>{`// /* */ << >> <= >= => -> . ++ -- ^+-`}</span>
            <span>{`Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm`}</span>
            <span>{`Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz`}</span>
          </div>
        {/if}
        <div class="table-container !rounded-none !overflow-x-hidden">
          <table
            class="table table-compact text-left !whitespace-nowrap !rounded-none">
            <tbody>
              <tr>
                <th>Dowload URL</th>
                <td>
                  <a href="{currentFont?.downloadUrl}" class="btn">
                    <IconDownload size="16" />
                    <span class="max-w-[16rem] truncate"
                      >{currentFont?.downloadUrl}</span>
                  </a>
                </td>
              </tr>
              <tr>
                <th>Webiste URL</th>
                <td>
                  <a href="{currentFont?.siteUrl}" target="_blank" class="btn">
                    <IconExternalLink size="16" />
                    <span class="max-w-[16rem] truncate"
                      >{currentFont?.siteUrl}</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <SearchBar />
      <table
        class="table table-hover table-compact table-interactive !rounded-none">
        <tbody>
          {#each fonts as font (font)}
            <tr
              on:click="{() => {
                goto(`/${encodeURIComponent(font.family.replace(/\s+/g, ''))}`);
              }}"
              class:!variant-ghost-primary="{currentFont.family ===
                font.family}">
              <td
                style="font-family: '{font.family}'"
                class="!whitespace-nowrap max-w-[9rem] truncate"
                >{font.family}</td>
              <td class="hidden md:table-cell">
                <button
                  class="btn btn-sm variant-ringed-surface"
                  class:!variant-ghost-primary="{font.family ===
                    $fontFamilyRight}"
                  on:click|stopPropagation="{() => {
                    $fontFamilyRight = font.family;
                  }}">
                  <IconBoxAlignRightFilled size="16" />
                  <span>Compare</span>
                </button>
              </td>
              <td>
                <div
                  class="btn-group variant-ringed-surface [&>*+*]:border-surface-400-500-token">
                  <a href="{font?.siteUrl}" target="_blank" class="!p-2 !pl-3">
                    <IconExternalLink size="16" />
                  </a>
                  <a href="{font?.downloadUrl}" class="!p-2 !pr-3">
                    <IconDownload size="16" />
                  </a>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </Sidebar>
  </svelte:fragment>
  <svelte:fragment slot="pageHeader">
    <Controls />
  </svelte:fragment>
  <div
    class="grid grid-cols-1 md:grid-cols-2 h-full bg-surface-50-900-token p-4 gap-4">
    <div class="flex flex-col gap-4" class:col-span-2="{!$fontFamilyRight}">
      <FontHeader font="{currentFont}" />
      <MonacoEditor
        class="rounded-container-token overflow-hidden"
        fontSize="{$fontSize}"
        fontFamily="{currentFont?.family}"
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
          class="btn variant-filled-surface absolute bottom-10 self-center"
          on:click="{() => {
            $fontFamilyRight = '';
          }}">Clear Comparison</button>
      </div>
    {/if}
  </div>
</AppShell>
