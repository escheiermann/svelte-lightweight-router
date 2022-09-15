/**
 * Checks if route can be accessed.
 * @returns true if route can be accessed.
 */
export function guardRoute(route) {
    if (hasGuard(route)) {
        for (let i = 0; i < route.guards.length; i++) {
            const path = route.guards[i](route.path);
            if (path !== true) {
                return path;
            }
        }
    }
    return true;
}

function hasGuard(route) {
    return route.guards && route.guards.length > 0;
}
