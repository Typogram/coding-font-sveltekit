<script lang="ts">
import { Download, ExternalLink, Maximize } from 'svelte-tabler';
export let font: any;
</script>

<div class="flex flex-row justify-between items-center">
  <h3 class="h3 whitespace-nowrap truncate">{font.family}</h3>
  <div
    class="btn-group variant-ringed-surface [&>*+*]:border-surface-400-500-token">
    <a href="{font.siteUrl}" target="_blank">
      <ExternalLink size="24" />
      <span>Visit {font.family}</span>
    </a>
    <a href="{font.downloadUrl}">
      <Download size="24" />
      <span>Download {font.family}</span>
    </a>
    <a href="/{encodeURIComponent(font.family)}">
      <Maximize size="24" />
    </a>
  </div>
</div>
