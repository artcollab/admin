<script>
  import Drawer from "@smui/drawer";

  export let colappseble = true;
  export let open = false;

  $: open = colappseble ? false : true;
</script>

{#if colappseble}
  <Drawer variant="modal" bind:open>
    <slot />
  </Drawer>
{:else}
  <Drawer variant="modal" open={true}>
    <slot />
  </Drawer>
{/if}
