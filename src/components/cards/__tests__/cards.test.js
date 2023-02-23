import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Cards from "../cards";
import data from "../../../assets/mockData/index.json";
import makeRequest from "../../../utils/makeRequest/index.js"

jest.mock("../../../utils/makeRequest/index.js");

describe("Cards", () => {
    it("should show loading text when data is still loading", async () => {
      makeRequest.mockResolvedValue(data);
      render(<Cards />);
      expect(screen.getByText("Loading...")).toBeTruthy();
      await waitFor(() => {
        expect(screen.getByText(10)).toBeTruthy();
      });
    });
    it('should show cards when data is loaded',async()=>{
        makeRequest.mockResolvedValue(data);
        render(<Cards />);
        await waitFor(()=>{
        expect(screen.getAllByTestId("cardPost")).toHaveLength(6);
        })
    })
    it('should show error when data is not loaded',async()=>{
        makeRequest.mockRejectedValue({message: "Error!!!!"});
        render(<Cards />);
        await waitFor(()=>{
        expect(screen.getByText("Error!!!!")).toBeTruthy();
        })
    })
 });

