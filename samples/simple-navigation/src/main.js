import * as Light from "../../../src/index";
import App from "./App.svelte";
import Home from "./Home.svelte";
import Legal from "./Legal.svelte";
import Privacy from "./Privacy.svelte";

var routes = [
	{path: "", component: Home},
	{path: "legal", component: Legal},
	{path: "privacy", component: Privacy},
];

Light.defineRoutes(routes);

var app = new App({
	target: document.body
});

export default app;
