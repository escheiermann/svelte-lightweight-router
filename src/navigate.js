import { getRoute } from "./routes";

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
