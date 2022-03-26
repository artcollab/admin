<script>
  import Button, { Label } from "@smui/button";
  import Card, { Content, Actions } from "@smui/card";
  import { goto } from "@roxi/routify";
</script>

<div class="fallback">
  <Card>
    <Content
      ><div class="mdc-typography--body1">
        Whoops something went wrong!
      </div></Content
    >
    <Actions fullBleed>
      <Button
        on:click={() => {
          $goto(history.back());
        }}
      >
        <Label><slot name="action">Go back</slot></Label>
        <i class="material-icons" aria-hidden="true">arrow_forward</i>
      </Button>
    </Actions>
  </Card>
</div>

<style lang="scss">
  @import "index.scss";
  .fallback {
    margin-top: 3vh;
  }
</style>
