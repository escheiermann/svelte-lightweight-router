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

/**
 * Returns the route for a path.
 * @param path to the page (e.g. "home").
 * @returns route for the specified path.
 */
export function getRoute(path) {
    return allRoutes.filter(route => route.path === path)[0];
}

/**
 * Sets the route for the current page.
 */
export function setRoute() { 
    const newRoute = getRoute(location.hash.substring(1));
    if (newRoute && guardRoute(newRoute)) {
        currentPage.set(newRoute.component);    
    }
}
