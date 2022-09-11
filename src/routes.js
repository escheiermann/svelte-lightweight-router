var allRoutes = [];

export function defineRoutes(routes) {
    allRoutes = routes;
}

export function getRoute(path) {
    return allRoutes.filter(route => route.path === path)[0];
}
