import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import TestComponent from "./TestComponent.svelte";
import Router from "../src/Router.svelte";
import { currentPage } from "../src/router";

describe("Router", () => {
    beforeEach(() => {
        currentPage.set(TestComponent);
        render(Router);
    });

    test("should display current page", () => {
        const component = screen.getByText('TestComponent');
        expect(component).toBeInTheDocument();
    });
});
