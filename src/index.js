import { setRoute } from "./routes";

window.onpopstate = setRoute;

export { defineRoutes } from "./routes";
export { navigate } from "./navigate";
export { default as Router } from "./Router.svelte";
