<script>
  import { login, authenticating, user } from "./store.js";

  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Textfield from "@smui/textfield/index";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text/index";
  import Button, { Label } from "@smui/button";
  let invalid = false;
  let username = "user@example.com";
  let password = "pass";

  const handleSubmit = () => login(username, password);
</script>

<div class="container">
  <h3>Login</h3>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={username} />
    <input type="password" bind:value={password} />
    {#if !$authenticating && !$user}
      <input type="submit" />
    {:else}
      authenticating...
    {/if}
  </form>
</div>
<!-- 
<div class="container" id="form">
  <LayoutGrid>
    <Cell span={6}>
      <Textfield
        type="email"
        bind:invalid
        updateInvalid
        bind:value={username}
        label="Email"
        input$autocomplete="email"
      >
        <Icon class="material-icons" slot="leadingIcon">email</Icon>
        <HelperText validationMsg slot="helper">Invalid email</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield
        type="password"
        bind:invalid
        bind:value={password}
        label="Password"
        input$autocomplete="password"
      >
        <Icon class="material-icons" slot="leadingIcon">password</Icon>
        <HelperText validationMsg slot="helper">Invalid password</HelperText>
      </Textfield>
    </Cell>

    <Cell span={6}>
      <div class="right">
        <Button
          on:click={() => {
            login();
          }}
          variant="outlined"
        >
          <Label>Login</Label>
        </Button>
      </div>
    </Cell>
  </LayoutGrid>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: #232324;
    border-radius: 1rem;
  }
  .right {
    float: right;
  }
</style> -->
