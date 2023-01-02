import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import { defineRoutes, navigate } from "../../src/index";
import TestApp from "./TestApp.svelte";
import TestPage1 from "./TestPage1.svelte";
import TestPage2 from "./TestPage2.svelte";
import { tick } from "svelte";
import { currentPage } from "../../src/router/page";

describe("svlete-lightweight-router", () => {
    beforeEach(() => {
        currentPage.set(null);
        location.hash = "";
        render(TestApp);
    });

    test("should display component for route '' initially when defineRoutes is called", async () => {
        const routes = [
            {path: "", component: TestPage1}
        ];
        
        defineRoutes(routes);
        await tick();

        expect(screen.getByText("TestPage1")).toBeInTheDocument();
    });

    test("should navigate to different route when navigate is called", async() => {
        const newRoute = "test";
        const routes = [
            {path: "", component: TestPage1},
            {path: newRoute, component: TestPage2}
        ];
        defineRoutes(routes);

        navigate(newRoute);
        window.dispatchEvent(new Event("popstate"));
        await tick();

        expect(screen.getByText("TestPage2")).toBeInTheDocument();
    });

    test("should navigate stay on route when navigate for not existing path is called", async() => {
        const routes = [
            {path: "", component: TestPage1},
            {path: "test", component: TestPage2}
        ];
        defineRoutes(routes);

        navigate("hello");
        window.dispatchEvent(new Event("popstate"));
        await tick();

        expect(screen.getByText("TestPage1")).toBeInTheDocument();
    });

    test("should navigate to notFoundRoute when Route has been changed for not existing path", async() => {
        const routes = [
            {path: "", component: TestPage1},
            {path: "test", component: TestPage2}
        ];
        const notFoundRoute = {path: "", component: TestPage1};
        defineRoutes(routes, notFoundRoute);

        navigate("hello");
        window.dispatchEvent(new Event("popstate"));
        await tick();

        expect(screen.getByText("TestPage1")).toBeInTheDocument();
    });
});
