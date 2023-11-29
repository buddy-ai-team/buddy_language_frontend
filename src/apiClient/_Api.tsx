import axios, {AxiosInstance} from "axios";

const initData = new URLSearchParams(window.location.hash.slice(1))
  .get('tgWebAppData');

if (initData === null) {
    console.log("initData is empty");
  throw new Error('Ooof! Something is wrong. Init data is missing');
}
console.log(initData); 

const api : AxiosInstance = axios.create({
baseURL: "https://buddylanguageapi.azurewebsites.net",
  headers: {
    Authorization: `tma ${initData}`,
  }
});

export default api;