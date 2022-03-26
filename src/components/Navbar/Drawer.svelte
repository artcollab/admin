<script>
  import Drawer from "@smui/drawer";

  export let colappseble = true;
  let open = false;

  $: open = colappseble ? false : true;
</script>

{#if colappseble}
  <Drawer
    variant="modal"
    bind:open
    on:blur={() => {}}
    on:mouseout={() => {
      open = false;
    }}
  >
    <slot />
  </Drawer>
{:else}
  <Drawer variant="modal" open={true}>
    <slot />
  </Drawer>
{/if}
