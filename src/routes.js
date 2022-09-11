import { currentPage } from "./page";
import { guardRoute } from "./guard";

var allRoutes = [];

/**
 * Defines and sets up routes for the application.
 * @param routes array containing all application routes. 
 */
export function defineRoutes(routes) {
    allRoutes = routes;
    setRoute();
}

export function getRoute(path) {
    return allRoutes.filter(route => route.path === path)[0];
}

export function setRoute(event) { 
    const newRoute = getRoute(location.hash.substring(1));
    if (newRoute && guardRoute(newRoute)) {
        currentPage.set(newRoute.component);    
    }
}
