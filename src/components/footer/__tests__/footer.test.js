import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../footer";

describe("Footer", () => {
    it("should render the footer", () => {
        render(<Footer />);
        expect(screen.getByTestId("footer")).toBeTruthy();
    });
});