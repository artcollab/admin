<script context="module">
  import Viewport from "../../node_modules/svelte-viewport-info";
</script>

<script>
  import NavBar from "#navbar/Bar.svelte";

  import Login from "#auth/Login.svelte";
  import { authenticating, user } from "#auth/store.js";
  import { ready } from "@roxi/routify";

  import CircularProgress from "@smui/circular-progress";

  const MOBILE_MAX_SIZE = 800;
  let colappseble = Viewport.Width < MOBILE_MAX_SIZE ? true : false;

  $: if (!$authenticating && !$user) $ready();
</script>

<svelte:body
  on:viewportchanged={() => {
    if (Viewport.Width < MOBILE_MAX_SIZE) {
      colappseble = true;
    } else {
      colappseble = false;
    }
  }} />

<div id="app">
  <aside>
    <NavBar {colappseble} />
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
  @import "_layout.scss";
</style>
