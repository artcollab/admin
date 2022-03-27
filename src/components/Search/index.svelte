<script lang="ts">
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import { results } from "./store.js";

  export let icon = "search";
  export let text = "Search User";
  let search = "";

  export let data: any[] = ["Hello", "Hi"];
  export let searchEl = (el) => {
    return el as string;
  };

  $: {
    if (search) {
      results.update((r) => []);
      data.forEach((el) => {
        if (searchEl(el).toLowerCase().includes(search.toLowerCase())) {
          results.update((results) => [...results, el]);
        }
      });
    } else {
      results.update((r) => []);
    }
  }
</script>

<div>
  <Textfield variant="filled" bind:value={search} label={text}>
    <Icon class="material-icons" slot="trailingIcon">{icon}</Icon>
  </Textfield>
</div>

<style lang="scss">
  @import "index.scss";
</style>
