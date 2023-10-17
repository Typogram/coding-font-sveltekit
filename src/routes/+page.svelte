<script lang="ts">
import { MonacoEditor } from '$lib';
import { selectedTheme, fontSize, fontFamily, fontLigatures } from '$lib/store';
</script>

<div class="flex flex-col h-full bg-surface-50-900-token p-4">
  <div class="flex-grow">
    <MonacoEditor
      class="rounded-container-token overflow-hidden"
      fontSize="{$fontSize}"
      fontFamily="{$fontFamily}"
      fontLigatures="{$fontLigatures}"
      themeName="{$selectedTheme}" />
  </div>
</div>
