import { currentPage } from "./page";
import { guardRoute } from "./guard";

var allRoutes = [];
var errorRoute;

/**
 * Defines and sets up routes for the application.
 * @param routes array containing all application routes. 
 * @param notFoundRoute route to redirect to if route could not be found. 
 */
export function defineRoutes(routes, notFoundRoute) {
    allRoutes = routes;
    errorRoute = notFoundRoute;
    updateRoute();
}

/**
 * Returns the route for a path.
 * @param path to the page (e.g. "home").
 * @returns route for the specified path.
 */
export function getRoute(path) {
    const route = allRoutes.filter(route => route.path === path)[0];
    return route !== undefined ? route : errorRoute;
}

/**
 * Navigates to the specified path.
 * @param {string} path to the page (e.g "home").
 */
export function navigate(path) {
    const newRoute = getRoute(path);
    if (newRoute) {
        location.hash = newRoute.path; 
    }
}

/**
 * Sets the route for the current page.
 */
export function updateRoute() { 
    const newRoute = getRoute(location.hash.substring(1));
    if (newRoute) {
        const guard = guardRoute(newRoute);
        if (guard === true) {
            currentPage.set(newRoute.component); 
        } else if (guard !== false) {
            navigate(guard);
        }   
    }
}
