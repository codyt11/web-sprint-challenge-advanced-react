import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm/>)
    const title = getByText(/Checkout Form/i)
    expect(title.textContent).toBe("Checkout Form")
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />)
    const checkout = getByTestId("checkout");
    

     waitFor(() => {
        fireEvent.click(checkout) 
        const successMessage = getByTestId("successMessage")
        expect(successMessage.textContent).toBe(
            "You have ordered some plants! Woo-hoo! 🎉 Your new green friends will be shipped to: "
        )
    })
    
});
