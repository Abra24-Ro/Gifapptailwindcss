import { describe, expect, test } from "vitest";
import { MyCounter } from "./MyCounter";
import { fireEvent, render, screen } from "@testing-library/react";

describe("MyCounter", () => {
    test("should render component properly", () => {
     render(<MyCounter />)

     expect(screen.getAllByRole("heading",{level:1})[0].innerHTML).toContain(`Counter: 10`)

    })

    test("should increment the counter",()=> {
        render(<MyCounter />)

        const  labelH1 = screen.getAllByRole("heading",{level:1})[0]
        const button = screen.getAllByRole("button")[0]

        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain(`Counter: 11`)
    })
     test("should decrement the counter",()=> {
        render(<MyCounter />)

        const  labelH1 = screen.getAllByRole("heading",{level:1})[0]
        const button = screen.getAllByRole("button")[1]

        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain(`Counter: 9`)
    })
  
    
});