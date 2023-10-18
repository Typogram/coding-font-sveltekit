<script lang="ts">
import { fontFamily, fontFamilyRight, menuOpen } from '$lib/store';
import {
  IconDownload,
  IconExternalLink,
  IconMaximize,
  IconBoxAlignRightFilled
} from '$lib';

export let fonts;

let previewText: string;
</script>

<div class="table-container whitespace-nowrap">
  <table class="table table-hover table-compact table-interactive">
    <thead>
      <tr>
        <th>Font Family</th>
        <th class="hidden md:table-cell">Preview</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each fonts as font (font)}
        <tr
          on:click="{() => {
            $menuOpen = false;
            $fontFamily = font.family;
          }}"
          class:!variant-ghost-primary="{$fontFamily === font.family}">
          <td
            style="font-family: '{font.family}'"
            class="!whitespace-nowrap max-w-[9rem] truncate"
            >{previewText ?? font.family}</td>
          <td class="hidden md:table-cell">
            <button
              class="btn btn-sm variant-ringed-surface"
              class:!variant-ghost-primary="{font.family === $fontFamilyRight}"
              on:click|stopPropagation="{() => {
                $menuOpen = false;
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
              <a href="{font?.downloadUrl}" class="!p-2">
                <IconDownload size="16" />
              </a>
              <a
                href="/{encodeURIComponent(font.family.replace(/\s+/g, ''))}"
                class="!p-2 !pr-3">
                <IconMaximize size="16" />
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
