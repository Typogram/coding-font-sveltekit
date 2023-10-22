<script lang="ts">
import { IconDownload, IconExternalLink, IconMaximize } from '$lib';
import { showName } from '$lib/store';
export let font: any;
</script>

{#if $showName}
  <div class="flex flex-row items-center justify-between">
    <a
      href="/{encodeURIComponent(font.family.replace(/\s+/g, ''))}"
      class="h3 truncate whitespace-nowrap hover:underline">{font.family}</a>
    <div
      class="variant-ringed-surface btn-group [&>*+*]:border-surface-400-500-token">
      <a href="{font.siteUrl}" target="_blank">
        <IconExternalLink size="24" />
        <span class="hidden 2xl:block">Visit {font.family}</span>
      </a>
      <a href="{font.downloadUrl}">
        <IconDownload size="24" />
        <span class="hidden 2xl:block">Download {font.family}</span>
      </a>
      <a href="/{encodeURIComponent(font.family.replace(/\s+/g, ''))}">
        <IconMaximize size="24" />
      </a>
    </div>
  </div>
{/if}
