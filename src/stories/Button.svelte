<script>
  import { createEventDispatcher } from "svelte";
  import Button, { Label, Icon } from "@smui/button";
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * What background color to use
   */
  export let backgroundColor;
  /**
   * How large should the button be?
   */
  export let size = "medium";
  /**
   * Button contents
   */
  export let label = "";

  let mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  let style = backgroundColor ? `background-color: ${backgroundColor}` : "";

  const dispatch = createEventDispatcher();

  /**
   * Optional click handler
   */
  function onClick(event) {
    dispatch("click", event);
  }
</script>

<Button on:click={() => {}} variant="raised" class="button-shaped-round">
  <Label>Raised</Label>
</Button>
<Button on:click={() => {}} variant="unelevated" class="button-shaped-round">
  <Label>Unelevated</Label>
</Button>
<Button on:click={() => {}} variant="outlined" class="button-shaped-round">
  <Label>Outlined</Label>
</Button>
<Button on:click={() => {}} variant="unelevated" class="button-shaped-round">
  <Icon class="material-icons">favorite</Icon>
  <Label>Icon</Label>
</Button>
<Button on:click={() => {}} variant="outlined" class="button-shaped-round">
  <Label>Trailing Icon</Label>
  <Icon class="material-icons">favorite</Icon>
</Button>
