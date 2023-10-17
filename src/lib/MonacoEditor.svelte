<script lang="ts">
import { onMount } from 'svelte';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import { monacoThemes } from './monacoThemes';

export let fontFamily = "'Major Mono Display', monospace";
export let fontSize = 20;
export let themeName = 'monokai';
export let code = `onMount(() => {
  monaco.editor.create(editorContainer, {
    value: code,
    language: 'javascript',
    theme: 'vs-dark',
    fontFamily: fontFamily,
    fontSize: fontSize
  });
});
`;

let editor;
let editorContainer;

onMount(async () => {
  self.MonacoEnvironment = {
    getWorker(_, label) {
      if (label === 'json') {
        return new jsonWorker();
      }
      if (label === 'css' || label === 'scss' || label === 'less') {
        return new cssWorker();
      }
      if (label === 'html' || label === 'handlebars' || label === 'razor') {
        return new htmlWorker();
      }
      if (label === 'typescript' || label === 'javascript') {
        return new tsWorker();
      }
      return new editorWorker();
    }
  };
  const monaco = await import('monaco-editor');
  monacoThemes.forEach((theme) => {
    monaco.editor.defineTheme(theme.slug, theme.themeData);
  });
  editor = monaco.editor.create(editorContainer, {
    value: code,
    language: 'javascript',
    theme: 'vs-dark',
    fontFamily: fontFamily,
    fontSize: fontSize,
    automaticLayout: true,
    minimap: {
      enabled: false
    }
  });
  editor.updateOptions({ theme: themeName });
});

$: if (themeName && editor) {
  editor.updateOptions({ theme: themeName });
}
</script>

<div class="w-full h-full" bind:this="{editorContainer}"></div>
