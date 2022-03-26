<script>
  import Navigation from "./Navigation.svelte";
  import Link from "#auth/Link.svelte";
  import Drawer from "./Drawer.svelte";
  import { Header } from "@smui/drawer";

  export let colappseble = false;
  export let open = true;
</script>

<!-- <div class="right">
  {#if colappseble}
    <button
      class="button"
      on:click={() => {
        open = !open;
      }}
    >
      <i class="material-icons">menu</i>
    </button>
  {/if} -->
<Drawer {colappseble} {open}>
  <nav>
    <Header>
      <Link />
    </Header>
    <Navigation />
  </nav>
</Drawer>

<!-- </div> -->
<style type="text/scss">
  @import "Bar.scss";
</style>
