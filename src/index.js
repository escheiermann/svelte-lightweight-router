import { setRoute } from "./router/routes";

window.onpopstate = setRoute;

export { defineRoutes } from "./router/routes";
export { navigate } from "./router/navigate";
export { default } from "./router/Router.svelte";
