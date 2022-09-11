import { guardRoute } from "../src/guard";
import { defineRoutes } from "../src/routes";

describe("guard", () => {
    test("guardRoute should return true if route has no guards defined", () => {
        const route = {};

        const guard = guardRoute(route);

        expect(guard).toBe(true);
    });

    test("guardRoute should return true if route has empty guards array", () => {
        const route = {guards: []};

        const guard = guardRoute(route);

        expect(guard).toBe(true);
    });

    test("guardRoute should return true if guards are true", () => {
        const route = {guards: [function(path) {return true}]};

        const guard = guardRoute(route);

        expect(guard).toBe(true);
    });

    test("guardRoute should return false if guards are false", () => {
        const route = {guards: [function(path) {return false}]};

        const guard = guardRoute(route);

        expect(guard).toBe(false);
    });

    test("guardRoute should navigate if guards return path", () => {
        const expectedPath = "test1";
        const route = {path: expectedPath, guards: [function(path) {return expectedPath}]};
        defineRoutes([route]);

        guardRoute(route);

        expect(location.hash).toBe("#" + expectedPath);
    });
});
