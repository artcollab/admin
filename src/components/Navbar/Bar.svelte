<script>
  import Navigation from "./Navigation.svelte";
  import Link from "#auth/Link.svelte";

  import Drawer, { Header } from "@smui/drawer";

  export let open = true;
  export let children;
</script>

<div>
  <Drawer variant="modal" bind:open>
    <nav>
      <Header>
        <Link />
      </Header>
      <Navigation {children} />
    </nav>
  </Drawer>
</div>
