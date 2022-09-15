import { updateRoute } from "./router/routes";

window.onpopstate = updateRoute;

export { defineRoutes, navigate } from "./router/routes";
export { default } from "./router/Router.svelte";
