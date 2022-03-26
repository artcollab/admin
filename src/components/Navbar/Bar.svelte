<script>
  import Navigation from "./Navigation.svelte";
  import Link from "#auth/Link.svelte";
  import Drawer from "./Drawer.svelte";
  import { Header } from "@smui/drawer";

  export let colappseble = false;
  export let children;
  let open = true;
</script>

<div>
  <Drawer {colappseble}>
    <nav>
      <Header>
        <Link />
      </Header>
      <Navigation {children} />
    </nav>
  </Drawer>
</div>
