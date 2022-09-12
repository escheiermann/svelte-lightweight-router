import { defineRoutes } from "../src/router/routes";
import { navigate } from "../src/router/navigate";

describe("navigate", () => {
    test("should update location hash for existing route", () => {
        const path = "test";
        defineRoutes([{path}]);

        navigate(path);

        expect(location.hash).toBe("#" + path);
    });

    test("should not update location hash for missing path", () => {
        const path = "test";
        location.hash = path

        navigate("hello");

        expect(location.hash).toBe("#" + path);
    });
});
