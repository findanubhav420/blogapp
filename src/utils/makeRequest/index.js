import axios from "axios";
// import { NavigateFunction } from "react-router-dom";
import { BACKEND_URL } from "../../constants/apiEndPoints.js";
import { ERROR_ROUTE } from "../../constants/routes.js";
const makeRequest = async (
  apiEndPoint= {url:"", method:""},
  dynamicConfig = {},
  navigate
) => {
  try{
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
}catch(e){
  if (navigate) {
    const errorStatus = e.response?.status;
    if (errorStatus) {
      navigate(`${ERROR_ROUTE}/${errorStatus}`);
    } else {
      navigate(ERROR_ROUTE);
    }
  }
}
};

export default makeRequest;