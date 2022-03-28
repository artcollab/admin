<script lang="ts">
  import DataTable, { Head, Body, Pagination } from "@smui/data-table";
  import IconButton from "@smui/icon-button";
  import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from "@smui/list";
  import Search from "#search/index.svelte";
  import { results } from "#search/store.js";
  import { goto } from "@roxi/routify";
  import { getCredentials } from "#components/Auth/store";
  import ky from "ky";

  type User = {
    id: string;
    email: string;
    name: string;
    surname: string;
    username: string;
    profileID: string;
    createdAt: string;
    updatedAt: string;
  };
  let users: User[] = [];
  let rowsPerPage = 6;
  let currentPage = 0;
  let selection = "";

  $: contentLength = $results.length ? $results.length : users.length;
  $: start = currentPage * rowsPerPage;
  $: end = Math.min(start + rowsPerPage, contentLength);
  $: slice = $results.length
    ? $results.slice(start, end)
    : users.slice(start, end);
  $: lastPage = Math.max(Math.ceil(contentLength / rowsPerPage) - 1, 0);

  $: if (currentPage > lastPage) {
    currentPage = lastPage;
  }
  let searchEl = (el) => {
    return el.username as string;
  };

  const getUsers = async () => {
    const getUsersAuth = ky.extend({
      hooks: {
        beforeRequest: [
          (request) => {
            request.headers.set(
              "Authorization",
              `Bearer ${getCredentials().at}`
            );
          },
        ],
      },
    });
    await getUsersAuth
      .get(`${import.meta.env.VITE_API_URL}/users`)
      .json()
      .then((res: User[]) => {
        users = res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getUsers();
  // if (typeof fetch !== "undefined") {
  //   fetch(
  //     "https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/todos.json"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => (users = json.slice(0, 197)));
  // }
</script>

<div class="table">
  <DataTable>
    <Head>
      <Search data={users} {searchEl} />
    </Head>
    <Body>
      <List twoLine avatarList singleSelection>
        {#each slice as user}
          <Item
            on:SMUI:action={() => {
              selection = user.username;
              $goto(`/users/${user.username}`);
            }}
            selected={selection === user.username}
          >
            <Graphic
              style="background-image: url(https://place-hold.it/40x40?text={user.name.slice(
                0,
                1
              ) + user.surname.slice(0, 1)}&fontsize=16);"
            />
            <Text>
              <PrimaryText>{user.username}</PrimaryText>
              <SecondaryText>{user.name} {user.surname}</SecondaryText>
            </Text>
            <Meta class="material-icons">menu</Meta>
          </Item>
        {/each}
      </List>
    </Body>

    <Pagination slot="paginate">
      <svelte:fragment slot="rowsPerPage" />
      <svelte:fragment slot="total">
        {start + 1}-{end} of {contentLength}
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
</div>
