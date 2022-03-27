<script lang="ts">
  import type { MenuSurfaceComponentDev } from "@smui/menu-surface";
  import List, { Item, Graphic, Separator, Text } from "@smui/list";
  import MenuSurface from "@smui/menu-surface";
  import Textfield from "@smui/textfield";
  import { Icon, Label } from "@smui/common";
  import IconButton from "@smui/icon-button";

  let surface: MenuSurfaceComponentDev;
  let name = "";
  let email = "";
</script>

<div style="min-width: 100px;">
  <IconButton on:click={() => surface.setOpen(true)}
    ><Icon class="material-icons">menu</Icon></IconButton
  >
  <MenuSurface bind:this={surface} anchorCorner="BOTTOM_LEFT">
    <List class="demo-list" dense>
      <Item
        on:SMUI:action={() => {
          surface.setOpen(false);
        }}
      >
        <Graphic class="material-icons">edit</Graphic>
        <Text>Edit</Text>
      </Item>
      <Item
        on:SMUI:action={() => {
          surface.setOpen(false);
        }}
      >
        <Graphic class="material-icons">send</Graphic>
        <Text>Send</Text>
      </Item>
      <Item
        on:SMUI:action={() => {
          surface.setOpen(false);
        }}
      >
        <Graphic class="material-icons">archive</Graphic>
        <Text>Archive</Text>
      </Item>
      <Separator />
      <Item
        on:SMUI:action={() => {
          surface.setOpen(false);
        }}
      >
        <Graphic class="material-icons">clear</Graphic>
        <Text>Delete</Text>
      </Item>
    </List>
  </MenuSurface>
</div>
