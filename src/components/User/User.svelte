<script lang="ts">
  import Avatar from "svelte-avatar";
  import type User from "#models/User";
  import { goto } from "@roxi/routify";
  import Card from "@smui/card";
  import IconButton from "@smui/icon-button";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text";
  import FormField from "@smui/form-field";
  import Checkbox from "@smui/checkbox";
  import { auth } from "#auth/store";

  export let user: User;
  let _user: User;
  if (user) {
    _user = {
      id: user.id,
      email: user.email,
      username: user.username,
      profileID: user.profileID,
      name: "",
      surname: "",
    };
  }
  const action = () => {
    $goto(history.back());
  };
  const remove = async () => {
    await auth()
      .post(`${import.meta.env.VITE_API_URL}/users/remove`, {
        json: { user_id: user.id },
      })
      .then((res) => {
        if (res.status == 200) {
          action();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const save = () => {
    user.name = _user.name ? _user.name : user.name;
    user.surname = _user.surname ? _user.surname : user.surname;
  };
</script>

<div class="card">
  <Card padded>
    {#if user}
      <LayoutGrid>
        <Cell span={2}>
          <Avatar name="{user.name} {user.surname}" />
        </Cell>
        <Cell span={6}>
          <h2 class="mdc-typography--headline6" style="margin: 0;">
            {user.email}
          </h2>
          <h3 class="mdc-typography--subtitle2" style="margin: 0;">
            {user.username}
          </h3>
        </Cell>
        <Cell span={4}>
          <div class="right">
            <IconButton
              class="material-icons"
              on:click={() => {
                remove();
              }}>delete</IconButton
            >
          </div>
        </Cell>
        <Cell span={6}>
          <Textfield type="name" bind:value={_user.name} label={user.name}>
            <Icon class="material-icons" slot="leadingIcon">perm_identity</Icon>
            <HelperText slot="helper">Name</HelperText>
          </Textfield>
        </Cell>
        <Cell span={6}>
          <Textfield
            type="name"
            bind:value={_user.surname}
            label={user.surname}
          >
            <Icon class="material-icons" slot="leadingIcon">perm_identity</Icon>
            <HelperText slot="helper">Surname</HelperText>
          </Textfield>
        </Cell>
        <Cell span={6}>
          <FormField>
            <Checkbox bind:checked={user.admin} />
            <span slot="label"> admin </span>
          </FormField>
        </Cell>
        <Cell span={6}>
          <div class="right">
            <IconButton class="material-icons">save</IconButton>
          </div>
        </Cell>
      </LayoutGrid>
    {:else}
      <div class="center">
        <div class="mdc-typography--body1">User does not exist!</div>
      </div>
    {/if}
  </Card>
</div>

<style lang="scss">
  @import "User.scss";
</style>
