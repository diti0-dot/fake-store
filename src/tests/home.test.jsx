import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import Home from '../pages/home'

describe("Home component", () => {
  it("renders correct heading", () => {
    render( <MemoryRouter> 
        <Home />
      </MemoryRouter>);
      const h1 = screen.getByRole("heading", {level:1});
    expect(h1.textContent).toMatch(/Welcome to StyleStore/i);

       const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2.textContent).toMatch(/20\+ New Styles Arrived/i);
  });
});