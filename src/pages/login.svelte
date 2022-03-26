<script>
  import Login from '#auth/Login.svelte'
  import { user } from '#auth/store.js'
  import { goto } from '@roxi/routify'
  // if user is already logged in, we don't want them on the login page
  $: if ($user) $goto('/')
</script>

<!-- routify:options index=false -->
<Login />
