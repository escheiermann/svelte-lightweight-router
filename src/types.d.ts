import { SvelteComponentTyped } from "svelte";

interface Route {
    path: string;
    component: string;
    guards?: []
}

export const defineRoutes: (routes: Route[]) => void;

export const navigate: (path: string) => void;

export class Router extends SvelteComponentTyped<{}> {}
