<script>
  import { user, authenticating } from "./store";
  import { Title, Subtitle } from "@smui/drawer";
  import CircularProgress from "@smui/circular-progress";
</script>

{#if $authenticating}
  <CircularProgress style="height: 16px; width: 16px;" indeterminate />
{:else if $user}
  <Title>Yoav Levi</Title>
  <Subtitle>{$user.username}</Subtitle>
{:else}
  <Title>Hello!</Title>
  <Subtitle>please login :)</Subtitle>
{/if}
