import { writable } from "svelte/store";
import { getRoute } from "./routes";
import { guardRoute } from "./guard";

export const currentPage = writable(getRoute(location.hash.substring(1))?.component);

window.onpopstate = function(event) {
    const newRoute = getRoute(location.hash.substring(1));
    if (newRoute && guardRoute(newRoute)) {
        currentPage.set(newRoute.component);    
    }
}
