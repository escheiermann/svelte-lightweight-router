import { defineRoutes } from "svelte-lightweight-router";
import App from "./App.svelte";
import Home from "./Home.svelte";
import Legal from "./Legal.svelte";
import Privacy from "./Privacy.svelte";

var routes = [
	{path: "", component: Home},
	{path: "legal", component: Legal},
	{path: "privacy", component: Privacy},
];

defineRoutes(routes);

var app = new App({
	target: document.body
});

export default app;
