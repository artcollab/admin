<script>
  import { user, authenticating } from "./store";
  import { Title, Subtitle } from "@smui/drawer";
  import Circle from "#components/Progress/Circle.svelte";
</script>

{#if $authenticating}
  <div>
    <Circle size={"16px"} />
  </div>
{:else if $user}
  <Title>{$user.name} {$user.surname}</Title>
  <Subtitle>{$user.email}</Subtitle>
{:else}
  <Title>Hello!</Title>
  <Subtitle>please login :)</Subtitle>
{/if}

<style lang="scss">
  @import "Link.scss";
</style>
