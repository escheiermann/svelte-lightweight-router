import { getRoute, defineRoutes, setRoute } from "../src/router/routes";
import { currentPage } from "../src/router/page";
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

    test("setRoute should update currentPage", () => {
        currentPage.set({});
        const route = {path: "test", component: "TestComponent"};
        location.hash = route.path;
        defineRoutes([route]);
        
        setRoute();

        expect(get(currentPage)).toBe(route.component);
    });

    test("setRoute should not update currentPage if route is missing", () => {
        const component = "TestComp";
        currentPage.set(component);
        location.hash = "test2";
        defineRoutes([]);
        
        setRoute();

        expect(get(currentPage)).toBe(component);
    });

    test("setRoute should not update currentPage if route guard returns false", () => {
        const component = "TestComp";
        currentPage.set(component);
        const route = {path: "test", guards: [function(path) {return false}]};
        location.hash = route.path;
        defineRoutes([route]);
        
        setRoute();

        expect(get(currentPage)).toBe(component);
    });
});