<script>
import { navigate } from "svelte-lightweight-router";

import { loggedIn } from "./auth";

    function login() {
        loggedIn.set(true);
        navigate("");
    }
</script>
<h1>Login</h1>

<button on:click={login}>Log in</button>
