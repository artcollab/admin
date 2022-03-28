<script lang="ts">
  import { params } from "@roxi/routify";
  import { getCredentials } from "#components/Auth/store";
  import Profile from "#user/user.svelte";
  import type User from "#models/User";
  import ky from "ky";
  import Circle from "#progress/Circle.svelte";

  let username = $params.profile;
  let user: User;
  const at = getCredentials().at;

  const getUser = async () => {
    const getUser = ky.extend({
      hooks: {
        beforeRequest: [
          (request) => {
            request.headers.set("Authorization", `Bearer ${at}`);
          },
        ],
      },
    });
    await getUser
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
