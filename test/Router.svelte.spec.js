import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import TestComponent from "./TestComponent.svelte";
import Router from "../src/router/Router.svelte";
import { currentPage } from "../src/router/page";

describe("Router", () => {
    test("should display current page", () => {
        currentPage.set(TestComponent);
        render(Router);
        const component = screen.getByText('TestComponent');
        expect(component).toBeInTheDocument();
    });
});
