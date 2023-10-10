<script>
import '../app.css';
import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
  <!-- (header) -->
  <svelte:fragment slot="sidebarLeft">
    <div id="sidebar-left" class="hidden lg:block">Sidebar</div>
  </svelte:fragment>
  <!-- (sidebarRight) -->
  <svelte:fragment slot="pageHeader">
    <AppBar>
      <svelte:fragment slot="lead">(icon)</svelte:fragment>
      (title)
      <svelte:fragment slot="trail">(actions)</svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
  <!-- (footer) -->
</AppShell>
