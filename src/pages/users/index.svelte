<script>
  import { user } from "#auth/store";

  import Snackbar, { Actions, Label as LabelSnack } from "@smui/snackbar";
  import IconButton from "@smui/icon-button";
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Pagination,
  } from "@smui/data-table";
  import Card from "@smui/card";

  $: start = currentPage * rowsPerPage;

  let rowsPerPage = 10;
  let currentPage = 0;

  let email = null;
  let name = null;
  let surname = null;
  let dob = null;
  let country = null;
  let phone = null;
  let password = null;
  let key = null;
  let invalid = false;
  let dateRegex =
    /(201[0-7]|200[0-9]|[0-1][0-9]{3})[-.\/](1[0-2]|0[1-9])[-.\/](3[01]|[0-2][1-9]|[12]0)/;
  let invalidDate = false;
  let open = false;
  let data;
  let _user;
  let viewMenu;

  let error;
  let errorText;

  $: {
    if ($user.error) {
      errorText = $user.error;
      error.open();
      console.log($user.error);
    }
  }

  $: {
    if (dob) {
      if (dob.match(dateRegex)) {
        invalidDate = false;
      } else {
        invalidDate = true;
      }
    }
  }
  const view = async () => {
    let data = [
      {
        _id: "623ec887aa0d04cf0f084621",
        id: "bb53aa11-e801-4daf-bb32-9f8b77ac7edc",
        email: "test3@gmail.com",
        name: "dad2",
        surname: "007",
        username: "heqllo",
        following: [],
        friends: [],
        createdAt: "2022-03-26T08:02:15.227Z",
        updatedAt: "2022-03-26T08:02:15.227Z",
        __v: 0,
      },
      {
        _id: "63ec887aa0d04cf0f0824621",
        id: "bb53aa11-e801-4daX-bb32-9f8b77ac7edc",
        email: "test4@gmail.com",
        name: "dad3",
        surname: "007",
        username: "heXllo",
        following: [],
        friends: [],
        createdAt: "2022-03-26T08:02:15.227Z",
        updatedAt: "2022-03-26T08:02:15.227Z",
        __v: 0,
      },
    ];
    return data;
  };
</script>

{#if errorText}
  <Snackbar bind:this={error}>
    <LabelSnack>
      {errorText}</LabelSnack
    >
    <Actions>
      <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
  </Snackbar>
{/if}
{#await view()}
  //loading thingy
{:then users}
  <Card>
    <DataTable style="max-width: 100%;">
      <Head>
        <Row>
          <Cell>Email</Cell>
          <Cell>View</Cell>
          <Cell>Edit</Cell>
          <Cell>Remove</Cell>
        </Row>
      </Head>
      <Body>
        {#each users as user (user.email)}
          <Row>
            <Cell>{user.email}</Cell>
            <Cell>
              <IconButton class="material-icons" on:click={() => {}}
                >person</IconButton
              ></Cell
            >
            <Cell>
              <IconButton class="material-icons" on:click={() => {}}
                >edit</IconButton
              ></Cell
            >
            <Cell>
              <IconButton class="material-icons">delete</IconButton></Cell
            >
          </Row>
        {/each}
      </Body>
      <Pagination slot="paginate">
        <svelte:fragment slot="rowsPerPage">
          <Label>Rows Per Page</Label>
          <Select variant="outlined" bind:value={rowsPerPage} noLabel>
            <Option value={10}>10</Option>
            <Option value={25}>25</Option>
            <Option value={100}>100</Option>
          </Select>
        </svelte:fragment>
        <svelte:fragment slot="total">
          {start + 1}-{users.length} of {users.length}
        </svelte:fragment>

        <IconButton
          class="material-icons"
          action="first-page"
          title="First page"
          on:click={() => (currentPage = 0)}
          disabled={currentPage === 0}>first_page</IconButton
        >
        <IconButton
          class="material-icons"
          action="prev-page"
          title="Prev page"
          on:click={() => currentPage--}
          disabled={currentPage === 0}>chevron_left</IconButton
        >
        <IconButton
          class="material-icons"
          action="next-page"
          title="Next page"
          on:click={() => currentPage++}
          disabled={currentPage === lastPage}>chevron_right</IconButton
        >
        <IconButton
          class="material-icons"
          action="last-page"
          title="Last page"
          on:click={() => (currentPage = lastPage)}
          disabled={currentPage === lastPage}>last_page</IconButton
        >
      </Pagination>
    </DataTable>
  </Card>
{/await}
