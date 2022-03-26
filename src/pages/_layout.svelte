<script>
  import NavBar from "#navbar/Bar.svelte";

  import Login from "#auth/Login.svelte";
  import { authenticating, user } from "#auth/store.js";
  import { ready } from "@roxi/routify";

  import CircularProgress from "@smui/circular-progress";

  $: if (!$authenticating && !$user) $ready();
</script>

<div id="app">
  <aside>
    <NavBar />
  </aside>
  <section>
    <header />
    <div class="container">
      {#if $user}
        <slot />
      {:else if $authenticating}
        <CircularProgress style="height: 32px; width: 32px;" indeterminate />
      {:else}
        <Login />
      {/if}
    </div>
    <footer />
  </section>
</div>

<style type="text/scss">
  @import "./_layout.scss";
</style>
