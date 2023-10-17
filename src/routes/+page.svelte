<script lang="ts">
import { AppShell } from '@skeletonlabs/skeleton';
import { Header, SearchBar, Sidebar, Controls, MonacoEditor } from '$lib';
import {
  selectedTheme,
  fontSize,
  fontFamily,
  fontFamilyRight,
  fontLigatures,
  searchTerm
} from '$lib/store';
import {
  Download,
  ExternalLink,
  BoxAlignLeft,
  BoxAlignRight,
  BoxAlignLeftFilled,
  BoxAlignRightFilled
} from 'svelte-tabler';

export let data;
let { fonts } = data;
let previewText: string;

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
  slotSidebarLeft="resize-x min-w-0 lg:w-[24rem] lg:min-w-[16rem] hidden lg:flex">
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar>
      <SearchBar />
      <div class="table-container whitespace-nowrap">
        <table class="table table-hover table-compact table-interactive">
          <thead>
            <tr>
              <th>Font Family</th>
              <th>Preview</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each fonts as font (font)}
              <tr
                on:click="{() => {
                  $fontFamily = font.family;
                }}">
                <td
                  style="font-family: '{font.family}'"
                  class="!whitespace-nowrap max-w-[9rem] truncate"
                  >{previewText ?? font.family}</td>
                <td>
                  <div
                    class="btn-group variant-ringed-surface [&>*+*]:border-surface-400-500-token">
                    <button
                      class="!p-2 !pl-3"
                      class:!variant-filled-primary="{font.family ===
                        $fontFamily}">
                      <BoxAlignLeftFilled size="16" />
                    </button>
                    <button
                      class="!p-2 !pr-3"
                      class:!variant-filled-primary="{font.family ===
                        $fontFamilyRight}"
                      on:click|stopPropagation="{() => {
                        $fontFamilyRight = font.family;
                      }}">
                      <BoxAlignRightFilled size="16" />
                    </button>
                  </div>
                </td>
                <td>
                  <div
                    class="btn-group variant-ringed-surface [&>*+*]:border-surface-400-500-token">
                    <a
                      href="{font?.siteUrl}"
                      target="_blank"
                      class="!p-2 !pl-3">
                      <ExternalLink size="16" />
                    </a>
                    <a href="{font?.downloadUrl}" class="!p-2 !pr-3">
                      <Download size="16" />
                    </a>
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
          <tfoot>
            <tr>
              <th colspan="1">Total</th>
              <td colspan="2">{`${fonts.length} fonts`}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Sidebar>
  </svelte:fragment>
  <svelte:fragment slot="pageHeader">
    <Controls />
  </svelte:fragment>
  <div class="grid grid-cols-2 h-full bg-surface-50-900-token p-4 gap-4">
    <div class="flex flex-col gap-4" class:col-span-2="{!$fontFamilyRight}">
      <div class="h3 flex flex-row justify-between">
        <span>{$fontFamily}</span>
        <div
          class="btn-group variant-ringed-surface [&>*+*]:border-surface-400-500-token">
          <a href="{getFontByFamilyName($fontFamily)?.siteUrl}" target="_blank">
            <ExternalLink size="24" />
            <span>Visit {$fontFamily}</span>
          </a>
          <a href="{getFontByFamilyName($fontFamily)?.downloadUrl}">
            <Download size="24" />
            <span>Download {$fontFamily}</span>
          </a>
        </div>
      </div>
      <MonacoEditor
        class="rounded-container-token overflow-hidden"
        fontSize="{$fontSize}"
        fontFamily="{$fontFamily}"
        fontLigatures="{$fontLigatures}"
        themeName="{$selectedTheme}" />
    </div>
    {#if $fontFamilyRight}
      <div class="flex flex-col gap-4 relative">
        <div class="h3 flex flex-row justify-between">
          <span>{$fontFamilyRight}</span>
          <div
            class="btn-group variant-ringed-surface [&>*+*]:border-surface-400-500-token">
            <a
              href="{getFontByFamilyName($fontFamilyRight)?.siteUrl}"
              target="_blank">
              <ExternalLink size="24" />
              <span>Visit {$fontFamilyRight}</span>
            </a>
            <a href="{getFontByFamilyName($fontFamilyRight)?.downloadUrl}">
              <Download size="24" />
              <span>Download {$fontFamilyRight}</span>
            </a>
          </div>
        </div>
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

<style>
table tr td {
  @apply align-middle;
}
</style>
