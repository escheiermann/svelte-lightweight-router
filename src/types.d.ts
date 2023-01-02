import { SvelteComponentTyped } from "svelte";

interface Route {
    path: string;
    component: string;
    guards?: []
}

export const defineRoutes: (routes: Route[], notFoundRoute?: Route) => void;

export const navigate: (path: string) => void;

export class Router extends SvelteComponentTyped<{}> {}
