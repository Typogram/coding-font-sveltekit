import IconMenu from 'svelte-tabler/Menu2.svelte';
import IconColorSwatch from 'svelte-tabler/ColorSwatch.svelte';
import IconDownload from 'svelte-tabler/Download.svelte';
import IconExternalLink from 'svelte-tabler/ExternalLink.svelte';
import IconMaximize from 'svelte-tabler/Maximize.svelte';
import IconBoxAlignLeftFilled from 'svelte-tabler/BoxAlignLeftFilled.svelte';
import IconBoxAlignRightFilled from 'svelte-tabler/BoxAlignRightFilled.svelte';
import IconCompare from 'svelte-tabler/Columns2.svelte';

import ThemeSwitch from './ThemeSwitch.svelte';
import Logo from './Logo.svelte';
import Controls from './Controls.svelte';
import SearchBar from './SearchBar.svelte';
import FontTable from './FontTable.svelte';
import FontHeader from './FontHeader.svelte';
import Sidebar from './Sidebar.svelte';
import Header from './Header.svelte';
import MonacoEditor from './MonacoEditor.svelte';
import { monacoThemeNames, monacoThemes } from './monacoThemes';
import codingFonts from './codingFonts';

export {
  /* Icon Components */
  IconMenu,
  IconColorSwatch,
  IconDownload,
  IconExternalLink,
  IconMaximize,
  IconBoxAlignLeftFilled,
  IconBoxAlignRightFilled,
  IconCompare,
  /* Components */
  Logo,
  ThemeSwitch,
  Controls,
  SearchBar,
  FontHeader,
  FontTable,
  Sidebar,
  Header,
  /* Monaco Editor Related */
  MonacoEditor,
  monacoThemeNames,
  monacoThemes,
  /* Coding Fonts Metadata */
  codingFonts
};
