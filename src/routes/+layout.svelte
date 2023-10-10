<script>
import '../app.css';
import { AppShell } from '@skeletonlabs/skeleton';
import { Header, Sidebar } from '$lib';
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar />
  </svelte:fragment>
  <slot />
</AppShell>
