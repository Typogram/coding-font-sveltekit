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
  fontFamilyRight,
  fontLigatures
} from '$lib/store';
import {
  Download,
  ExternalLink,
  Maximize,
  BoxAlignLeftFilled,
  BoxAlignRightFilled
} from 'svelte-tabler';

export let data;
const { fonts } = data;

$: font = data.font;

$: {
  console.log(font);
}
function getFontByFamilyName(familyName: string) {
  return data.fonts.find((font) => font.family === familyName);
}
</script>

<AppShell
  slotSidebarLeft="resize-x min-w-0 lg:w-[30rem] lg:min-w-[16rem] hidden lg:flex">
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar>
      <div class="flex flex-col gap-4">
        <h2 class="h2">{font.family}</h2>
        <p>{`${font?.variants.length} styles`}</p>
        <div class="flex flex-wrap gap-2">
          {#each font.variants as variant (variant)}
            <a href="{font.files[variant]}" target="_blank" class="code"
              >{variant}</a>
          {/each}
        </div>
        <div
          style="font-family: '{font.family}'"
          class="card flex flex-col items-center justify-center min-h-[10rem] bg-white dark:bg-surface-900 border-surface-400-500-token border-2">
          <span>{`0oO|Ll1Iti ,.:; ()[]{} <> +-=/ * &!?`}</span>
          <span>{`0123456789 ""' .= != % @ ^~ && ||`}</span>
          <span>{`// ** */ << >> <= >= => -> .. ++ == !=`}</span>
          <span>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm</span>
          <span>Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</span>
        </div>
        <table class="table text-left !whitespace-nowrap">
          <tbody>
            <tr>
              <th>Dowload URL</th>
              <td>
                <a href="{font?.downloadUrl}" class="btn">
                  <span class="max-w-[18rem] truncate"
                    >{font?.downloadUrl}</span>
                  <Download size="16" />
                </a>
              </td>
            </tr>
            <tr>
              <th>Webiste URL</th>
              <td>
                <a href="{font?.siteUrl}" class="btn">
                  <span class="max-w-[18rem] truncate">{font?.siteUrl}</span>
                  <ExternalLink size="16" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <SearchBar />
      <FontTable fonts="{fonts}" />
    </Sidebar>
  </svelte:fragment>
  <svelte:fragment slot="pageHeader">
    <Controls />
  </svelte:fragment>
  <div class="grid grid-cols-2 h-full bg-surface-50-900-token p-4 gap-4">
    <div class="flex flex-col gap-4" class:col-span-2="{!$fontFamilyRight}">
      <FontHeader font="{font}" />
      <MonacoEditor
        class="rounded-container-token overflow-hidden"
        fontSize="{$fontSize}"
        fontFamily="{font?.family}"
        fontLigatures="{$fontLigatures}"
        themeName="{$selectedTheme}" />
    </div>
    {#if $fontFamilyRight}
      <div class="flex flex-col gap-4 relative">
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
