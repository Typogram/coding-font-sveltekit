<script lang="ts">
import { onMount } from 'svelte';
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

export let fontFamily = "'Major Mono Display', monospace";
export let fontSize = 20;
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

let editorContainer;

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

onMount(() => {
  monaco.editor.create(editorContainer, {
    value: code,
    language: 'javascript',
    theme: 'vs-dark',
    fontFamily: fontFamily,
    fontSize: fontSize
  });
});
</script>

<div class="w-full h-full" bind:this="{editorContainer}"></div>
