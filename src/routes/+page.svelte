<script lang="ts">
import { CodePreview, MonacoEditor } from '$lib';
import { monacoThemeNames } from '$lib/monacoThemes';

let selectedTheme: string = 'monokai';
</script>

<div class="h-full bg-surface-50-900-token p-4">
  <h1 class="h1">Welcome to Coding Font</h1>
  <CodePreview />
  <select bind:value="{selectedTheme}" class="select" size="1">
    {#each monacoThemeNames as theme (theme.slug)}
      <option value="{theme.slug}">{theme.displayName}</option>
    {/each}
  </select>
  <MonacoEditor themeName="{selectedTheme}" />
</div>
