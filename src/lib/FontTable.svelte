<script lang="ts">
import { fontFamily, fontFamilyRight } from '$lib/store';
import {
  IconDownload,
  IconExternalLink,
  IconMaximize,
  IconBoxAlignLeftFilled,
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
                class:!variant-filled-primary="{font.family === $fontFamily}">
                <IconBoxAlignLeftFilled size="16" />
              </button>
              <button
                class="!p-2 !pr-3"
                class:!variant-filled-primary="{font.family ===
                  $fontFamilyRight}"
                on:click|stopPropagation="{() => {
                  $fontFamilyRight = font.family;
                }}">
                <IconBoxAlignRightFilled size="16" />
              </button>
            </div>
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
              <a href="/{encodeURIComponent(font.family)}" class="!p-2 !pr-3">
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

<style>
table tr td {
  @apply align-middle;
}
</style>
