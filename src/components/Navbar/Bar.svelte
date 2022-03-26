<script>
  import Navigation from "./Navigation.svelte";
  import Link from "#auth/Link.svelte";
  import Drawer from "./Drawer.svelte";
  import { Header } from "@smui/drawer";

  export let colappseble = false;
  let open = true;
</script>

<div>
  <Drawer {colappseble}>
    <nav>
      <Header>
        <Link />
      </Header>
      <Navigation />
    </nav>
  </Drawer>
</div>
