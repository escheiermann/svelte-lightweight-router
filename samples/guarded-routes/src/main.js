
import { defineRoutes } from "svelte-lightweight-router";
import App from "./App.svelte";
import { authGuard } from "./auth-guard";
import Home from "./Home.svelte";
import Login from "./Login.svelte";

var routes = [
	{path: "", component: Home, guards: [authGuard]},
	{path: "login", component: Login}
];

defineRoutes(routes);

var app = new App({
	target: document.body
});

export default app;
