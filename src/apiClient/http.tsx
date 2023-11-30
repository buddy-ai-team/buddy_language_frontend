import axios, {AxiosInstance} from "axios";
import { getInitData } from "../initData";

const initData = getInitData();

const http : AxiosInstance = axios.create({
  baseURL: "https://buddylanguageapi.azurewebsites.net",
  headers: {
    Authorization: `tma ${initData}`,
  }
});

export default http;