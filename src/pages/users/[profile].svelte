<script lang="ts">
  import { params } from "@roxi/routify";
  import { auth } from "#components/Auth/store";
  import Profile from "#user/user.svelte";
  import type User from "#models/User";
  import Circle from "#progress/Circle.svelte";

  let username = $params.profile;
  let user: User;

  const getUser = async () => {
    await auth()
      .get(`${import.meta.env.VITE_API_URL}/users/name/${username}`)
      .json()
      .then((res: User) => {
        user = res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getUser();
</script>

{#if user}
  <Profile {user} />
{:else}
  <Circle />
{/if}
