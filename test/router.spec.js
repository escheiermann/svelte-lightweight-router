import { currentPage } from "../src/router";
import { get } from "svelte/store";
import { defineRoutes } from "../src/routes";

describe("router", () => {
    test("should update currentPage on window popstate event", () => {
        currentPage.set({});
        const route = {path: "test", component: "TestComponent"};
        location.hash = route.path;
        defineRoutes([route]);
        
        window.onpopstate(null);

        expect(get(currentPage)).toBe(route.component);
    });

    test("should not update currentPage on window popstate event if route is missing", () => {
        const component = "TestComp";
        currentPage.set(component);
        location.hash = "test2";
        defineRoutes([]);
        
        window.onpopstate(null);

        expect(get(currentPage)).toBe(component);
    });

    test("should not update currentPage on window popstate event if route guard returns false", () => {
        const component = "TestComp";
        currentPage.set(component);
        const route = {path: "test", guards: [function(path) {return false}]};
        location.hash = route.path;
        defineRoutes([route]);
        
        window.onpopstate(null);

        expect(get(currentPage)).toBe(component);
    });
});
