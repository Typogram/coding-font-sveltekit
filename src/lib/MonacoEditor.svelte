<script lang="ts">
import { onMount } from 'svelte';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import { monacoThemes } from './monacoThemes';

export let fontFamily = 'Major Mono Display';
export let fontSize = 20;
export let fontLigatures = true;
export let themeName = 'monokai';
export let code = `// This is a single-line comment example

/*
This is a multi-line comment example
Demonstrating various JavaScript syntax and elements
*/

// Defining a function using arrow function syntax
const isMultipleOf = (number, multiple) => {
  if (number === 0) {
    console.log('0 is a neutral element in multiplication.');
    return;
  }

  for (let i = 1; i <= 10; i++) {
    if ((number * i) % multiple === 0) {
      console.log(
        'The number ' + number * i + ' is a multiple of ' + multiple + '.'
      );
    } else {
      console.log(
        'The number ' + number * i + ' is not a multiple of ' + multiple + '.'
      );
    }
  }
};

// Distinguishing between 0, o, O, l, 1, I in variable names and values
let oO0 = 0; // Zero
let l1I = 1; // One

// Calling the function with different parameters
isMultipleOf(oO0, l1I); // Output related to zero
isMultipleOf(l1I, oO0); // Output related to one`;

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
    fontFamily: `'${fontFamily}', monospace`,
    fontSize: fontSize,
    fontLigatures: fontLigatures,
    automaticLayout: true,
    minimap: {
      enabled: true
    }
  });
  editor.updateOptions({ theme: themeName });
});

$: if (editor) {
  editor.updateOptions({ theme: themeName });
}

$: if (editor) {
  editor.updateOptions({ fontSize: fontSize });
}

$: if (editor) {
  editor.updateOptions({ fontFamily: `'${fontFamily}', monospace` });
}

$: if (editor) {
  editor.updateOptions({ fontLigatures: fontLigatures });
}
</script>

<div class="{$$props.class} h-full w-full" bind:this="{editorContainer}"></div>
