import { navigate } from "./navigate";

export function guardRoute(route) {
    if (hasGuard(route)) {
        for (let i = 0; i < route.guards.length; i++) {
            const path = route.guards[i](route.path);
            if (path !== true) {
                navigate(path);
                return false;
            }
        }
    }
    return true;
}

function hasGuard(route) {
    return route.guards && route.guards.length > 0;
}
