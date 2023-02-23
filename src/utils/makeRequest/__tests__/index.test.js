import { BACKEND_URL, UPDATE_BLOG_DATA } from "../../../constants/apiEndPoints";
import axios from "axios";
import makeRequest from "..";
import { GET_BLOG_DATA } from "../../../constants/apiEndPoints";
import {ERROR_ROUTE} from "../../../constants/routes.js";
import data from "../../../../src/assets/mockData/index.json";

jest.mock("axios");

describe("makeRequest", () => {

    it("should make API call with appropriate request options and return response body when only endpoint is specified", async () => {
        axios.mockResolvedValueOnce({
          data: data,
        });
        expect(axios).not.toHaveBeenCalled();
        const response = await makeRequest(GET_BLOG_DATA);
        expect(axios).toHaveBeenCalledTimes(1);
        expect(axios).toHaveBeenCalledWith({
          baseURL: BACKEND_URL,
          url: GET_BLOG_DATA.url,
          method: "get",
        });
        expect(response).toEqual(data);
      });
    
      it("should make API call with appropriate request options and return response body when both endpoint and request body are specified", async () => {
       axios.mockResolvedValueOnce({
          data: { claps: 1 },
        });
        expect(axios).not.toHaveBeenCalled();
        const response = await makeRequest(UPDATE_BLOG_DATA(1), {
          data: { claps: 1 },
        });
        expect(axios).toHaveBeenCalledTimes(1);
        expect(axios).toHaveBeenCalledWith({
          baseURL: BACKEND_URL,
          url: UPDATE_BLOG_DATA(1).url,
          method: "put",
          data: { claps: 1 },
        });
        expect(response).toEqual({ claps: 1 });
    });
    it("should navigate to error page with status code when API call returns error status code", async () => {
        const mockNavigate = jest.fn();
        axios.mockRejectedValueOnce({ response: { status: 500 } });
        expect(mockNavigate).not.toBeCalled();
        await makeRequest(
          UPDATE_BLOG_DATA(1),
          {
            data: { claps: 1 },
          },
          mockNavigate
        );
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith(`${ERROR_ROUTE}/500`);
      });
      it("should navigate to error page without status code when API call returns error without status code", async () => {
        const mockNavigate = jest.fn();
        axios.mockRejectedValueOnce({});
        expect(mockNavigate).not.toBeCalled();
        await makeRequest(
          UPDATE_BLOG_DATA(1),
          {
            data: { claps: 1 },
          },
          mockNavigate
        );
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith(ERROR_ROUTE);
      });
});