<script>
import '../app.css';
import { AppShell, AppBar } from '@skeletonlabs/skeleton';
import { Logo, Icon, ThemeSwitch } from '$lib';
</script>

<AppShell>
  <!-- (header) -->
  <svelte:fragment slot="sidebarLeft">
    <div id="sidebar-left" class="hidden lg:block">Sidebar</div>
  </svelte:fragment>
  <!-- (sidebarRight) -->
  <svelte:fragment slot="pageHeader">
    <AppBar>
      <svelte:fragment slot="lead">
        <button class="btn-icon variant-soft">
          <Icon name="Menu" />
        </button>
      </svelte:fragment>
      <Logo class="w-auto h-[3rem]" />
      <svelte:fragment slot="trail">
        <ThemeSwitch />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
  <!-- (footer) -->
</AppShell>
