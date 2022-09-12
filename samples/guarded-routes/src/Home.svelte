<script>
import { navigate } from "svelte-lightweight-router";

import { loggedIn } from "./auth";
    function logout() {
        loggedIn.set(false);
        navigate("login");
    }
</script>

<h1>Home</h1>
<p>You're currently on page <em>Home</em>!</p>
<button on:click={logout}>Logout</button>
