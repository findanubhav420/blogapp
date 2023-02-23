import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../header";

describe("Header", () => {
    it("should render the header", () => {
        render(<Header />);
        expect(screen.getByTestId("header")).toBeTruthy();
    });
});