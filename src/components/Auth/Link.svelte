<script>
  import { user, authenticating } from "./store";
  import { Title, Subtitle } from "@smui/drawer";
  import CircularProgress from "@smui/circular-progress";
</script>

{#if $authenticating}
  <div>
    <CircularProgress style="height: 16px; width: 16px;" indeterminate />
  </div>
{:else if $user}
  <Title>Yoav Levi</Title>
  <Subtitle>{$user.email}</Subtitle>
{:else}
  <Title>Hello!</Title>
  <Subtitle>please login :)</Subtitle>
{/if}

<style type="text/scss">
  @import "Link.scss";
</style>
