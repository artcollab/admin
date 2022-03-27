<script lang="ts">
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text";

  export let icon = "search";
  export let text = "Search User";
  let search = "";

  export let data: any[] = ["Hello", "Hi"];
  export let results: any[] = [];
  export let searchEl = (el) => {
    return el as string;
  };
  $: if (results) {
    console.log(results);
  }

  $: if (search) {
    results = [];
    data.forEach((el) => {
      if (searchEl(el).toLowerCase().includes(search.toLowerCase())) {
        results.push(el);
      }
    });
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
