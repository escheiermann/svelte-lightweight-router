import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import TestComponent from "./TestComponent.svelte";
import Router from "../src/Router.svelte";
import { currentPage } from "../src/page";

describe("Router", () => {
    test("should display current page", () => {
        currentPage.set(TestComponent);
        render(Router);
        const component = screen.getByText('TestComponent');
        expect(component).toBeInTheDocument();
    });
});
