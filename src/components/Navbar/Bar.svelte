<script>
  import Navigation from "./Navigation.svelte";
  import Link from "#auth/Link.svelte";
  import Drawer from "./Drawer.svelte";
  import { Header } from "@smui/drawer";

  export let colappseble = false;
  export let open = true;
</script>

{#if colappseble}
  <div class="top-bar">
    <button
      class="button"
      on:click={() => {
        open = !open;
      }}
    >
      <i class="material-icons">menu</i>
    </button>
  </div>
{/if}
<Drawer {colappseble} {open}>
  <nav>
    <Header>
      <Link />
    </Header>
    <Navigation />
  </nav>
</Drawer>

<style lang="scss">
  @import "Bar.scss";
</style>
