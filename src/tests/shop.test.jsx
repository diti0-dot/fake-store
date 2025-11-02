import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {vi} from "vitest"
import Shop from '../pages/shop'

describe("Shop component", () =>{
  
    it("should render add to cart btn", async() =>{
        //mocking fetch 
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok:true, 
                json: () =>
                    Promise.resolve([
                        {id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95},
                        {id: 2, title: "Mens Casual Premium Slim Fit T-Shirts", price:22.3},
                    ]),
            })
        )
            render(<Shop addCart={[]} setAddCart={() => {}} />);
            //testing only btns cuz if api fetch doesn't happen then btns won't appear so.. 
        const buttons = await screen.findAllByRole("button", {name:/add to cart/i});
        expect(buttons.length).toBeGreaterThan(0);
    })
})