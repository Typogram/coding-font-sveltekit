<script>
import '../app.css';
import { AppShell } from '@skeletonlabs/skeleton';
import { Header, Sidebar, Controls } from '$lib';
</script>

<AppShell
  slotSidebarLeft="resize-x min-w-0 lg:w-[24rem] lg:min-w-[16rem] hidden lg:flex">
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar />
  </svelte:fragment>
  <svelte:fragment slot="pageHeader">
    <Controls />
  </svelte:fragment>
  <slot />
</AppShell>
