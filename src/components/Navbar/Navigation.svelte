<script>
  import { url, isActive, layout } from "@roxi/routify";
  import { user, logout, authenticating } from "#auth/store";

  import List, { Item, Text, Graphic, Separator } from "@smui/list";
  import { Content } from "@smui/drawer";

  export let items = $layout.children;
  $: getClass = (path) => ($isActive(path) ? true : false);

  let icons = new Map();
  icons.set("users", "people");
  icons.set("posts", "feed");
  icons.set("reports", "report_problem");
  icons.set("analytics", "inventory");
</script>

<Content>
  <List>
    {#if $user}
      <Separator />
      <Item href={$url("")} activated={getClass("")}>
        <Graphic class="material-icons" aria-hidden="true">home</Graphic>
        <Text>Home</Text>
      </Item>
      {#each items as { path, title, children, ...rest }}
        {#if title != "login"}
          <Item href={$url(path)} activated={getClass(path)}>
            <Graphic class="material-icons" aria-hidden="true"
              >{icons.get(path.slice(1))}</Graphic
            >
            <Text>{title.charAt(0).toUpperCase() + title.slice(1)}</Text>
          </Item>
        {/if}
      {/each}
      <Item on:click={logout}>
        <Graphic class="material-icons" aria-hidden="true">logout</Graphic>
        <Text>Logout</Text>
      </Item>
    {/if}
  </List>
</Content>
