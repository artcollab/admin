<script lang="ts">
  import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from "@smui/list";

  export let options = [
    {
      name: "Bruce Willis",
      description: "Logged in",
    },
    {
      name: "Austin Powers",
      description: "Edited a mashup",
    },
    {
      name: "Thomas Edison",
      description: "Account creation",
    },
    {
      name: "Stephen Hawking",
      description: "Post",
    },
  ];
  let selection = "";
</script>

<div>
  <List twoLine avatarList singleSelection>
    {#each options as { name, description }}
      <Item
        on:SMUI:action={() => (selection = name)}
        selected={selection === name}
      >
        <Graphic
          style="background-image: url(https://place-hold.it/40x40?text={name
            .slice(0, 20)
            .split(' ')
            .map((val) => val.substring(0, 1))
            .join('')}&fontsize=16);"
        />
        <Text>
          <PrimaryText>{name.slice(0, 20)}</PrimaryText>
          <SecondaryText>{description.slice(0, 20)}</SecondaryText>
        </Text>
        <slot />
      </Item>
    {/each}
  </List>
</div>
