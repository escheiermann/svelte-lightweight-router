import { getRoute } from "./routes";

export function navigate(path) {
    const newRoute = getRoute(path);
    if (newRoute) {
        location.hash = newRoute.path; 
    }
}
