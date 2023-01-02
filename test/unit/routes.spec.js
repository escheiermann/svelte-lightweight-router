import { getRoute, defineRoutes, updateRoute, navigate } from "../../src/router/routes";
import { currentPage } from "../../src/router/page";
import { get } from "svelte/store";

describe("routes", () => {
    test("getRoute should return undefined for path not contained in routes", () => {
        const actualRoute = getRoute("test");

        expect(actualRoute).toBe(undefined);
    });

    test("getRoute should return route for path", () => {
        const path = "test";
        const expectedRoute = {path};
        defineRoutes([expectedRoute]);

        const actualRoute = getRoute(path);

        expect(actualRoute).toBe(expectedRoute);
    });

    test("getRoute should return errorRoute if path is not defined", () => {
        const path = "test";
        const expectedRoute = {path};
        defineRoutes([expectedRoute, {path: "test2"}], expectedRoute);

        const actualRoute = getRoute("test3");

        expect(actualRoute).toBe(expectedRoute);
    });

    test("updateRoute should update currentPage", () => {
        currentPage.set({});
        const route = {path: "test", component: "TestComponent"};
        location.hash = route.path;
        defineRoutes([route]);
        
        updateRoute();

        expect(get(currentPage)).toBe(route.component);
    });

    test("updateRoute should not update currentPage if route is missing", () => {
        const component = "TestComp";
        currentPage.set(component);
        location.hash = "test2";
        defineRoutes([]);
        
        updateRoute();

        expect(get(currentPage)).toBe(component);
    });

    test("updateRoute should not update currentPage if route guard returns false", () => {
        const component = "TestComp";
        currentPage.set(component);
        const route = {path: "test", guards: [function(path) {return false}]};
        location.hash = route.path;
        defineRoutes([route]);
        
        updateRoute();

        expect(get(currentPage)).toBe(component);
    });

    test("updateRoute should reroute if route guard returns path", () => {
        const component = "TestComp";
        const rerouteComponent = "RerouteComp";
        currentPage.set(component);
        const reroute = {path: "reroute", component: rerouteComponent}
        const route = {path: "test", guards: [function(path) {return reroute.path}]};
        location.hash = route.path;
        defineRoutes([route, reroute]);
        
        updateRoute();

        expect(get(currentPage)).toBe(rerouteComponent);
    });

    test("navigate should update location hash for existing route", () => {
        const path = "test";
        defineRoutes([{path}]);

        navigate(path);

        expect(location.hash).toBe("#" + path);
    });

    test("navigate should not update location hash for missing path", () => {
        const path = "test";
        location.hash = path

        navigate("hello");

        expect(location.hash).toBe("#" + path);
    });
});