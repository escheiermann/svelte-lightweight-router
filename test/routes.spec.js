import { getRoute, defineRoutes } from "../src/routes";

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
});