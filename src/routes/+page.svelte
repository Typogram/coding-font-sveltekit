<script lang="ts">
import { MonacoEditor } from '$lib';
import { selectedTheme, fontSize, fontFamily } from '$lib/store';
</script>

<div class="flex flex-col h-full bg-surface-50-900-token p-4">
  <div class="flex-grow">
    <MonacoEditor
      class="rounded-container-token overflow-hidden"
      fontSize="{$fontSize}"
      fontFamily="{$fontFamily}"
      themeName="{$selectedTheme}" />
  </div>
</div>
