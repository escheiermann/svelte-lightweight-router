<script>
import { navigate } from "svelte-lightweight-router";
    function visitLegalPage() {
        navigate("legal");
    }
</script>

<h1>Home</h1>
<p>You're currently on page <em>Home</em>!</p>
<button on:click={visitLegalPage}>See Legal Notice</button>
