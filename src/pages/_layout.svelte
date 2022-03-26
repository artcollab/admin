<script context="module">
  import Viewport from "svelte-viewport-info";
</script>

<script>
  import NavBar from "#navbar/Bar.svelte";

  import Login from "#auth/Login.svelte";
  import { authenticating, user } from "#auth/store.js";
  import { ready } from "@roxi/routify";

  import Circle from "#progress/Circle.svelte";

  const MOBILE_MAX_SIZE = 840;
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
  <section>
    <aside>
      <NavBar {colappseble} />
    </aside>
  </section>
  <section>
    <header />
    <div class="container">
      {#if $user}
        <slot />
      {:else if $authenticating}
        <Circle />
      {:else}
        <Login />
      {/if}
    </div>
    <footer />
  </section>
</div>

<style lang="scss">
  @import "_layout.scss";
</style>
